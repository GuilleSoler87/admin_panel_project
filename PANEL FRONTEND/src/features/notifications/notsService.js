import axios from "axios";

const API_URL = "http://localhost:8080";

const createNotificacion = async (notificacionData) => {
    const res = await axios.post(API_URL + "/notificaciones/create", notificacionData);
    return res.data;
};

const getAll = async () => {
    const res = await axios.get(API_URL + "/notificaciones/getAll");
    return res.data.notificaciones;
};

const getById = async (id) => {
    const res = await axios.get(API_URL + `/notificaciones/getById/${id}`);
    return res.data.notificacion;
};

const deleteNotificacion = async (id) => {
    const res = await axios.delete(API_URL + `/notificaciones/delete/${id}`);
    return res.data.notificacion;
};

const updateNotificacion = async (id, notificacionData) => {
    const res = await axios.put(API_URL + `/notificaciones/update/${id}`, notificacionData);
    return res.data.notificacion;
};

export default {
    createNotificacion,
    getAll,
    getById,
    deleteNotificacion,
    updateNotificacion,
};

