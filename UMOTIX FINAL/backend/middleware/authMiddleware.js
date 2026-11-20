const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ mensaje: "No autorizado" });
  }
};