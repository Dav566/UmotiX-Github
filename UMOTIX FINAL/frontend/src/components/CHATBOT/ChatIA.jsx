
import { useState } from "react";
import "./ChatIA.css";

function ChatIA() {
  const [abierto, setAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([
    {
      tipo: "ia",
      texto: "¡Hola! Soy UMOTIX AI. ⚽ ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [cargando, setCargando] = useState(false);

  const enviarMensaje = async (e) => {
    e.preventDefault();

    if (!mensaje.trim() || cargando) return;

    const texto = mensaje.trim();

    setMensajes((prev) => [
      ...prev,
      { tipo: "usuario", texto },
    ]);

    setMensaje("");
    setCargando(true);

    try {
      const response = await fetch(
        "https://umotix-backend.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mensaje: texto }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.respuesta || "Error al consultar el asistente");
      }

      setMensajes((prev) => [
        ...prev,
        { tipo: "ia", texto: data.respuesta },
      ]);

    } catch (error) {
      setMensajes((prev) => [
        ...prev,
        {
          tipo: "ia",
          texto: "Lo siento, no pude conectarme. Inténtalo nuevamente.",
        },
      ]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="chatia-contenedor">

      <button
        className="chatia-boton"
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? "✕" : "💬"}
      </button>

      {abierto && (
        <div className="chatia-ventana">

          <div className="chatia-cabecera">
            <strong>UMOTIX AI</strong>
            <span>Tu asistente deportivo</span>
          </div>

          <div className="chatia-mensajes">
            {mensajes.map((item, index) => (
              <div
                key={index}
                className={`chatia-mensaje ${item.tipo}`}
              >
                {item.texto}
              </div>
            ))}

            {cargando && (
              <div className="chatia-mensaje ia">
                Escribiendo...
              </div>
            )}
          </div>

          <form
            className="chatia-formulario"
            onSubmit={enviarMensaje}
          >
            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              disabled={cargando}
            />

            <button type="submit" disabled={cargando}>
              Enviar
            </button>
          </form>

        </div>
      )}
    </div>
  );
}

export default ChatIA;
