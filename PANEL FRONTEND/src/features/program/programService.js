import axios from "axios";

const API_URL = "http://localhost:8080";

const createProgram = async (data) => {
  const res = await axios.post(API_URL + "/programaciones/create", data);
  return res.data;
};

const programService = {
  createProgram,
};

export default programService;
