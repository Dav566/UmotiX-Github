const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      mensaje: "Correo o contraseña incorrectos",
    });
  }

  const token = jwt.sign(
    { email, rol: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return res.status(200).json({
    mensaje: "Inicio de sesión exitoso",
    token,
  });
};

module.exports = { login };
