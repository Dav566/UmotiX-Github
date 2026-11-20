import axios from "axios";
import { API_URL } from "../config.js";

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

export const getUsers = () => api.get("/users");
export const createUser = (data) => api.post("/users", data);

// Órdenes / pedidos de UmotiX
export const createOrder = (data) => api.post("/orders", data);
export const getOrders = () => api.get("/orders");

// Asistente / recomendador de IA
export const askAiCoach = (data) => api.post("/ai/recommend", data);

export default api;