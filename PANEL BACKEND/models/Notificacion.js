const mongoose = require("mongoose");

const NotificacionSchema = new mongoose.Schema({
    idEvento: String,
    contenido: String,
    recurrente:  { type: Boolean, default: false },
    categoria:  { type: String, default: "All" },
    programada:  {type: Boolean, default: false},
    dia: Date,
    hora: Date  
  }, { timestamps: true }
);

const Notificacion = mongoose.model("Notificacion", NotificacionSchema);

module.exports = Notificacion;