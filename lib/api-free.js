import axios from "axios";

// Cliente base para rutas públicas
const api_free = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor para manejar errores
api_free.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      // Personalizar el error para hacerlo más amigable
      const customError = {
        status: error.response.status,
        message: error.response?.data?.message || "Ocurrió un error",
        error: error.response?.data?.error || "Error",
        ...error.response?.data,
      };
      return Promise.reject(customError);
    }
    return Promise.reject(error);
  }
);

// Versión para el servidor
const createServerApiFree = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

export { api_free, createServerApiFree };
