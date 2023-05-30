const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
require("dotenv").config(); //importado .dotenv para secretito


const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, process.env.JWT_SECRET); 
    const usuario = await Usuario.findOne({ _id: payload._id, tokens: token });
    if (!usuario) {
      return res.status(401).send({ message: "No estas autorizado" });
    }
    req.usuario = usuario;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ error, message: "Necesitas estar autenticado" });
  }
};

module.exports = { authentication };
