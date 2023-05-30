const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
    nombre: String,                             
    imagen: String, //multer
   
  }, { timestamps: true }
);

const Sponsor = mongoose.model("Sponsor", SponsorSchema);

module.exports = Sponsor;