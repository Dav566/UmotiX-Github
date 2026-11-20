import { useState } from "react";
import "./Contact.css";
import { API_URL } from "../../config.js";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [respuesta, setRespuesta] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || "No se pudo enviar el mensaje");
      }

      setRespuesta("¡Tu mensaje fue enviado correctamente!");
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (error) {
      setRespuesta("No se pudo enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <section className="contacto" id="contacto">
      <h2>Contáctanos</h2>
      <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>

      <form onSubmit={handleSubmit} className="contacto__form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Tu teléfono"
          value={form.telefono}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar mensaje</button>
      </form>

      {respuesta && <p>{respuesta}</p>}
    </section>
  );
}

export default Contact;