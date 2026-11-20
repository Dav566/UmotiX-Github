
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createContact,
  getContacts
} = require("../controllers/contactController");

// Guardar contactos (público: lo usa el formulario)
router.post("/", createContact);

// Consultar contactos (solo administrador)
router.get("/", auth, getContacts);

module.exports = router;