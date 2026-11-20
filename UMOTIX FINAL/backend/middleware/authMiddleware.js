
const jwt = require("jsonwebtoken");

const verificarAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      mensaje: "Acceso denegado. Debes iniciar sesión.",
    });
  }

  try {
    const datos = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );

    if (datos.rol !== "admin") {
      return res.status(403).json({
        mensaje: "No tienes permisos de administrador.",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      mensaje: "Token inválido o vencido.",
    });
  }
};

module.exports = verificarAdmin;
