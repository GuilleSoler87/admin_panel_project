const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    inicio: Date,
    fin: Date,
    direccion: {
        lugar: String,
        localidad: String,
        provincia: String
    },
    econfirm:  { type: Boolean, default: false },
  }, { timestamps: true }
);

const Evento = mongoose.model("Evento", EventoSchema);

module.exports = Evento;