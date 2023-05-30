const Usuario = require("../models/Usuario");
const bcrypt = require ('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config(); 

const UsuarioController = {
  async create(req, res) {
    req.body.role = "usuario";
    const password = req.body.password;
    let hashedPassword;
    if (password) {
      hashedPassword = bcrypt.hashSync(password, 10); ///encriptando clave de acceso
    }
    try {
      const usuario = await Usuario.create({
        ...req.body,
        imagen: req.file.filename ,
        password: hashedPassword,
      });
      res.status(201).send({ message: "Usuario creado con éxito", usuario });
    } catch (error) {
      console.error(error);
    }
  },
// AÑADIDA VARIABLE ENTORNO PARA jsw_token
  async login(req, res) {
    try {
      const usuario = await Usuario.findOne({
        email: req.body.email,
      });

      const token = jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET);
      if (usuario.tokens.length > 4) usuario.tokens.shift;
      usuario.tokens.push(token);
      await usuario.save();
      res.send({ msg: "Bienvenid@ " + usuario.nombre, token, usuario });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Ha habido un error al loguearte", error });
    }
  },

  async getAll(req, res) {
    try {
      const usuarios = await Usuario.find();
      res.send({ message: "Usuarios mostrados con éxito", usuarios });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const usuario = await Usuario.findById(req.params._id);
      res.send({ message: "Usuario por ID mostrado con éxito", usuario });
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params._id);
      res.send({ usuario, message: "Eliminado" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al eliminar el usuario" });
    }
  },

  async update(req, res) {
    try {
      const usuario = await Usuario.findByIdAndUpdate(
        req.params._id,{
        // req.body,
        ...req.body,
        imagen: req.file.filename },
        { new: true }
      );
      res.send({ message: "Usuario actualizado con éxito", usuario });
    } catch (error) {
      console.error(error);
    }
  },

  async logout(req, res) {
    try {
      await Usuario.findByIdAndUpdate(req.usuario._id, {
        $pull: { tokens: req.headers.authorization },
      });

      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.error(error);

      res.status(500).send({
        message: "Hubo un problema al intentar desconectar al usuario",
      });
    }
  },
};
module.exports = UsuarioController;
