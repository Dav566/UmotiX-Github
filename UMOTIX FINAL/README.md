# UMOTIX - React + Node + MongoDB

## Estructura
```
umotix/
├── backend/    (Node + Express + Mongoose)
└── frontend/   (React + Vite)
```

## 1. Configurar MongoDB
Abre `backend/.env` y reemplaza MONGO_URI con tu cadena de conexión de Atlas
(con tu contraseña real y el nombre de la base de datos `umotix` antes del `?`).

## 2. Backend (terminal 1)
```
cd backend
npm install
npm run dev
```
Debe decir: "Servidor en puerto 5000" y "Base de datos conectada".

## 3. Frontend (terminal 2)
```
cd frontend
npm install
npm run dev
```
Abre http://localhost:5173
