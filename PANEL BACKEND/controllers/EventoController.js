const Evento = require("../models/Evento");

const EventoController = {
    
  async create(req, res) {
    try {
      const evento = await Evento.create(req.body);
      res.status(201).send({ message:  "Evento creado con exito", evento });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el evento" });
    }
  },
  async update(req, res) {
    try {
      const evento = await Evento.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Evento actualizado con éxito", evento });
    } catch (error) {
      console.error(error);
    }
  }

};

module.exports = EventoController;