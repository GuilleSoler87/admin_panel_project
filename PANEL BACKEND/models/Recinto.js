const mongoose = require("mongoose");

const RecintoSchema = new mongoose.Schema({
    aforo: Number,                             
    numeroAccesos: Number, //numero de accesos al recinto
    accesoDiscapacitados: Boolean,
    numeroPlantas: Number,
    ascensor: Boolean,
    numeroAseos: Number,
    wifi: Boolean,
    parking: Boolean,
    transportePublico: Boolean,
    salidasEmergencia: Number,
    zonaRestauracion: Boolean,
    zonaExterior: Boolean,
    zonaInterior: Boolean,
    salasPrivadas: Boolean,
    imagenRecinto: String //multer
   
  }, { timestamps: true }
);

const Recinto = mongoose.model("Recinto", RecintoSchema);

module.exports = Recinto;