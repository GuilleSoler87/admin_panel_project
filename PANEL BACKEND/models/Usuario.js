const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "Por favor rellena tu nombre"],
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Este correo no es válido"],
      unique: true,
      required: [true, "Por favor rellena tu correo"],
    },
    password: {
      type: String,
      required: [true, "Por favor rellena tu contraseña"],
    },
    role: { type: String, default: "usuario" },
    puesto: String,
    empresa: String,
    imagen: String, //multer
    tokens: [],
  },
  { timestamps: true }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
