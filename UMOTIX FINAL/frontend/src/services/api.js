import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getUsers = () => api.get("/users");
export const createUser = (data) => api.post("/users", data);

// Órdenes / pedidos de UmotiX
export const createOrder = (data) => api.post("/orders", data);
export const getOrders = () => api.get("/orders");

// Asistente / recomendador de IA
export const askAiCoach = (data) => api.post("/ai/recommend", data);

export default api;