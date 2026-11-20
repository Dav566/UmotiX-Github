
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatIA = async (req, res) => {
  try {
    const { mensaje } = req.body;

    if (!mensaje || typeof mensaje !== "string" || !mensaje.trim()) {
      return res.status(400).json({
        respuesta: "Por favor, escribe un mensaje.",
      });
    }

    if (mensaje.length > 1000) {
      return res.status(400).json({
        respuesta: "Tu mensaje es demasiado largo.",
      });
    }

    const respuesta = await client.responses.create({
      model: "gpt-5.5",
      instructions: `
        Eres UMOTIX AI, el asistente virtual de una tienda
        colombiana de artículos deportivos.

        Tu función es ayudar a los clientes a:
        - Encontrar productos deportivos.
        - Elegir artículos según el deporte que practican.
        - Resolver dudas generales sobre la tienda.
        - Recibir recomendaciones de compra.

        Responde siempre en español, con amabilidad,
        de forma clara y breve.

        No inventes precios, disponibilidad, marcas ni
        características de productos.

        Si no conoces un dato específico, recomienda
        consultar el catálogo de UMOTIX.
      `,
      input: mensaje,
      max_output_tokens: 300,
    });

    return res.status(200).json({
      respuesta: respuesta.output_text,
    });

  } catch (error) {
    console.error("Error en UMOTIX AI:", error.message);

    return res.status(500).json({
      respuesta: "No pude responder en este momento. Inténtalo nuevamente.",
    });
  }
};

module.exports = { chatIA };
