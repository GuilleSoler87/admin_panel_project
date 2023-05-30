const Programacion = require("../models/Programacion");

const ProgramacionController = {
    
  async create(req, res) {
    try {
      const programacion = await Programacion.create(req.body);
      res.status(201).send({ message:  "Programación creada con exito", programacion });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear la programación" });
    }
  },

  async getAll(req, res) {
    try {
      const programaciones = await Programacion.find();
      res.send({ message: "Programaciones mostradas con exito", programaciones });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const programacion = await Programacion.findById(req.params._id);
      res.send({ message: 'Programación por ID mostrada con exito', programacion});
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const programacion = await Programacion.findByIdAndDelete(req.params._id)
      res.send({ programacion, message: 'Programación eliminada' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al eliminar la programación'})
    }
  },

  async update(req, res) {
    try {
      const programacion = await Programacion.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Programación actualizada con éxito", programacion });
    } catch (error) {
      console.error(error);
    }
  }

};

module.exports = ProgramacionController;