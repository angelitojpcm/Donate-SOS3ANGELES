import { query } from "./db";

export async function getMaintenanceStatus() {
  try {
    const [rows] = await query(`
      SELECT 
        is_active, 
        message, 
        start_time, 
        end_time 
      FROM maintenance_mode 
      WHERE id = 1
    `);

    return (
      rows[0] || {
        is_active: false,
        message: null,
        start_time: null,
        end_time: null,
      }
    );
  } catch (error) {
    console.error("Error al consultar estado de mantenimiento:", error);
    return { is_active: false, message: null };
  }
}
