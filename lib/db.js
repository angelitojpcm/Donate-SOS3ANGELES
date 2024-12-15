import mysql from "mysql2/promise";

const createPool = () => {
  const config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306,

    // Deshabilitar SSL completamente
    ssl: false,

    // Timeouts reducidos
    connectTimeout: 10000,
    acquireTimeout: 10000,

    // Configuración de pool básica
    waitForConnections: true,
    connectionLimit: 3,
    queueLimit: 0,
  };

  return mysql.createPool(config);
};

const pool = createPool();

// Función con reintentos
const queryWithRetry = async (sql, params, maxRetries = 3) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let connection;
    try {
      connection = await pool.getConnection();
      const [results] = await connection.query(sql, params);
      return [results];
    } catch (error) {
      lastError = error;
      console.error(`Intento ${attempt}/${maxRetries} fallido:`, error.message);
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    } finally {
      if (connection) connection.release();
    }
  }

  throw lastError;
};

const db = {
  pool,
  query: queryWithRetry,
};

export default db;
