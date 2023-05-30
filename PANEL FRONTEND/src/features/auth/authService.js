import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (usuarioData) => {
  const res = await axios.post(API_URL + "/usuarios/create", usuarioData);
  return res.data;
};

const login = async(usuarioData)=>{
  const res = await axios.post(API_URL + '/usuarios/login',usuarioData)
  if (res.data) {
  localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
  localStorage.setItem("token", JSON.stringify(res.data.token));

  }
  return res.data
  };

const authService = {
  register,
  login
};

export default authService;
