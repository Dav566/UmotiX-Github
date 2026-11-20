const OpenAI = require("openai");

// Usamos la librería de OpenAI, pero apuntando a Groq (que es compatible)
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const chatIA = async (req, res) => {
  try {
    const { mensaje } = req.body;

    if (!mensaje || typeof mensaje !== "string" || !mensaje.trim()) {
      return res.status(400).json({ respuesta: "Por favor, escribe un mensaje." });
    }

    if (mensaje.length > 1000) {
      return res.status(400).json({ respuesta: "Tu mensaje es demasiado largo." });
    }

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content:
            "Eres UMOTIX AI, el asistente virtual de una tienda colombiana de artículos deportivos. " +
            "Ayudas a los clientes a encontrar productos y a elegir según el deporte que practican. " +
            "Responde siempre en español, con amabilidad y de forma breve. " +
            "No inventes precios ni disponibilidad. Si no sabes un dato, recomienda revisar el catálogo de UMOTIX.",
        },
        { role: "user", content: mensaje },
      ],
      max_tokens: 1000,
      reasoning_effort: "low",
    });

    return res.status(200).json({
      respuesta: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error en UMOTIX AI:", error.message);
    return res.status(500).json({
      respuesta: "No pude responder en este momento. Inténtalo nuevamente.",
    });
  }
};

module.exports = { chatIA };