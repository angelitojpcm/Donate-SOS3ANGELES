import { api_free } from "./api-free";
export async function getMaintenanceStatus() {
  try {
    const result = await api_free.get("/maintenance?recent=true");

    return result.data.data[0];
  } catch (error) {
    console.error("Error al consultar estado de mantenimiento:", error);
    return { is_active: false, message: null };
  }
}
