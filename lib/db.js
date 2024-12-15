import mysql from "mysql2/promise";

// Configuración del pool con mejores prácticas
const createPool = () => {
  const isProduction = process.env.VERCEL_ENV === "production";

  const config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306,

    // Config específica para Vercel
    ssl: {
      rejectUnauthorized: false,
    },

    // Timeouts optimizados
    connectTimeout: 60000,
    acquireTimeout: 60000,

    // Pool settings
    waitForConnections: true,
    connectionLimit: isProduction ? 3 : 10,
    queueLimit: 0,

    // Keep alive
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
  };

  return mysql.createPool(config);
};

const pool = createPool();

// Función para ejecutar queries con manejo de conexión
async function query(sql, params) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [results] = await connection.query(sql, params);
    return [results];
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release(); // Asegurarse de liberar la conexión
    }
  }
}

const db = {
  pool,
  query,
};

export default db;
