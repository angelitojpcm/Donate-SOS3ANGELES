import mysql from "mysql2/promise";

const createPool = () => {
  const isProduction = process.env.VERCEL_ENV === "production";

  const config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306,

    // Config específica para Vercel
    ssl: isProduction
      ? {
          rejectUnauthorized: true,
          ca: process.env.MYSQL_CA_CERT,
        }
      : false,

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

const retryOperation = async (operation, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((r) => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
};

async function query(sql, params) {
  return retryOperation(async () => {
    let conn;
    try {
      conn = await pool.getConnection();
      const [results] = await conn.query(sql, params);
      return results;
    } finally {
      if (conn) conn.release();
    }
  });
}

// Test conexión
const testConnection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log(
      "✅ Conexión MySQL exitosa desde:",
      process.env.VERCEL_ENV || "local"
    );
    conn.release();
    return true;
  } catch (error) {
    console.error("❌ Error conexión:", {
      env: process.env.VERCEL_ENV || "local",
      host: process.env.MYSQL_HOST,
      error: error.message,
    });
    return false;
  }
};

export { pool, query, testConnection };
