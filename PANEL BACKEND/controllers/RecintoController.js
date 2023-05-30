const Recinto = require("../models/Recinto");

const RecintoController = {
    
  async create(req, res) {
    try {
      console.log(req.file)
      const recinto = await Recinto.create({
        ...req.body,
        imagenRecinto: req.file.filename ,       
      
      });
      res.status(201).send({ message: "Recinto creado con exito", recinto });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el recinto" });
    }
  },

  async getAll(req, res) {
    try {
      const recintos = await Recinto.find();
      res.send({ message: "Recintos mostrados con exito", recintos });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const recinto = await Recinto.findById(req.params._id);
      res.send({ message: 'Recinto por ID mostrado con exito', recinto});
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const recinto = await Recinto.findByIdAndDelete(req.params._id)
      res.send({ recinto, message: 'Eliminado' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al eliminar el recinto'})
    }
  },

  async update(req, res) {
    try {
      const recinto = await Recinto.findByIdAndUpdate(
        req.params._id,{
        // req.body,
        ...req.body,
        imagenRecinto: req.file.filename} ,    
     
        { new: true }
      );
      res.send({ message: "Recinto actualizado con éxito", recinto });
    } catch (error) {
      console.error(error);
    }
  }

};

module.exports = RecintoController;