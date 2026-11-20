require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
console.log("USER:", typeof userRoutes);

const contactRoutes = require("./routes/contactRoutes");
console.log("CONTACT:", typeof contactRoutes);

const authRoutes = require("./routes/authRoutes");
console.log("AUTH:", typeof authRoutes);

const aiRoutes = require("./routes/aiRoutes");
console.log("AI:", typeof aiRoutes);

app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});