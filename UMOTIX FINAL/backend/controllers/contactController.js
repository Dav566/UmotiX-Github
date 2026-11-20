
const Contact = require("../models/Contact");

// Guardar contactos
const createContact = async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    const nuevoContacto = await Contact.create({
      nombre,
      email,
      telefono,
      mensaje,
    });

    return res.status(201).json({
      mensaje: "Contacto guardado correctamente",
      contacto: nuevoContacto,
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al guardar el contacto",
      error: error.message,
    });
  }
};

// Consultar contactos
const getContacts = async (req, res) => {
  try {
    const contactos = await Contact.find();
    return res.status(200).json(contactos);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al consultar los contactos",
      error: error.message,
    });
  }
};

module.exports = { createContact, getContacts };
