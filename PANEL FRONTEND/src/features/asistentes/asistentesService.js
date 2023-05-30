import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/usuarios/getAllUsers");

  return res.data.usuarios
};

const getById = async (_id) => {
  const res = await axios.get(API_URL + "/usuarios/getById/" + _id);
  return res.data.usuario;
};

const asistentesService = {
  getAll,
  getById, // Asegúrate de incluir getById en el objeto exportado
};

export default asistentesService;
