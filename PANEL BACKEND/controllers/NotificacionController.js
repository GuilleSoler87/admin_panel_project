const Notificacion = require("../models/Notificacion");

const NotificacionController = {
    
  async create(req, res) {
    try {
      const notificacion = await Notificacion.create(req.body);
      res.status(201).send({ message:  "Notificación creada con exito", notificacion });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear la notificación" });
    }
  },

  async getAll(req, res) {
    try {
      const notificaciones = await Notificacion.find();
      res.send({ message: "Notificaciones mostradas con exito", notificaciones });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const notificacion = await Notificacion.findById(req.params._id);
      res.send({ message: 'Notificación por ID mostrada con exito', notificacion});
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const notificacion = await Notificacion.findByIdAndDelete(req.params._id)
      res.send({ notificacion, message: 'Notificación eliminada' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al eliminar la notificación'})
    }
  },

  async update(req, res) {
    try {
      const notificacion = await Notificacion.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Notificación actualizada con éxito", notificacion });
    } catch (error) {
      console.error(error);
    }
  }

};

module.exports = NotificacionController;