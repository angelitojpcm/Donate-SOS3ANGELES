import mysql from "mysql2/promise";

// Configuración del pool con mejores prácticas
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "sos3angeles",
  port: process.env.MYSQL_PORT || 3306,

  // Ajustes para manejo óptimo de conexiones
  waitForConnections: true,
  connectionLimit: 5, // Reducir el límite de conexiones simultáneas
  maxIdle: 5, // Máximo de conexiones inactivas
  idleTimeout: 60000, // Tiempo en ms antes de cerrar conexiones inactivas
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,

  // Configuración de reconexión
  reconnect: {
    strategy: "periodic",
    retries: 5,
    delay: 3000,
  },
});

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
