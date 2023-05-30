import axios from "axios";

const API_URL = "http://localhost:8080";

const createEvent= async (data) => {
  const res = await axios.post(API_URL + "/eventos/create", data);
  return res.data;
};

const eventService = {
  createEvent,
};

export default eventService;