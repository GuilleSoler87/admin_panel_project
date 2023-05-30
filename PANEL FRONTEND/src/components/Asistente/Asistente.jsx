import React from "react";
import { useSelector } from "react-redux";
import "./Asistente.scss";
import { Link } from "react-router-dom";

const Asistente = () => {
  const { asistentes } = useSelector((state) => state.asistentes);

  if (asistentes?.length <= 0) {
    return "No hay asistentes...";
  }
  const asistents = asistentes.map((asistente, _id) => (
    <div className="asistent" key={_id}>
      <div className="info-user">
        <div className="img-container">
          <img src={`http://localhost:8080/${asistente.imagen}`} />
        </div>
        <div className="data">
          <h4>{asistente.nombre}</h4>
          <p>{asistente.puesto} en {asistente.empresa}</p>
        </div>
      </div>
      <div className="btn">
        <Link to={"/asistenteDetails/" + asistente._id}>
          <button className="button-perfil">Ver perfil</button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="principal-container-asistents">
      <span className="span-asistents-header">Lista de asistentes</span>
      <div className="container-asistent">{asistents}</div>
    </div>
  );
};

export default Asistente;
