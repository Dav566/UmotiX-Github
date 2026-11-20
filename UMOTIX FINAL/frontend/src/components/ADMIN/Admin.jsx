
import { useEffect, useState } from "react";

function Admin({ onLogout }) {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("tokenAdmin");

    fetch("http://localhost:5000/api/contact", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.mensaje || "No se pudieron cargar los mensajes");
        }

        setContactos(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  return (
    <section style={{ padding: "40px" }}>
      <h1>Panel de administración UMOTIX</h1>
      <h2>Mensajes de clientes</h2>

      <button onClick={onLogout}>Cerrar sesión</button>

      {cargando ? (
        <p>Cargando mensajes...</p>
      ) : error ? (
        <p>{error}</p>
      ) : contactos.length === 0 ? (
        <p>No hay mensajes registrados.</p>
      ) : (
        contactos.map((contacto) => (
          <article key={contacto._id}>
            <h3>{contacto.nombre}</h3>
            <p>Correo: {contacto.email}</p>
            <p>Teléfono: {contacto.telefono}</p>
            <p>Mensaje: {contacto.mensaje}</p>
            <hr />
          </article>
        ))
      )}
    </section>
  );
}

export default Admin;
