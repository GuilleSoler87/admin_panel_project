import axios from "axios";

const API_URL = "http://localhost:8080";

const createRecinto = async (recintoData) => {
  const res = await axios.post(API_URL + "/recintos/create", recintoData);
  return res.data;
};

const recintoService = {
    createRecinto,
};

export default recintoService;