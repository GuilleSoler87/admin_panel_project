import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/asistentes/asistentesSlice";
import "./AsistenteDetails.scss";

const AsistenteDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const { asistente } = useSelector((state) => state.asistentes);

  useEffect(() => {

    dispatch(getById(id));

  }, []);

  return (
    <div className="asistente-main-container">
      <h1>Perfil del asistente</h1>
      <div className="asistente-content">
        <div className="asistente-raya"></div>
        <div className="asistente-info-container">
          <div className="asistente-info">
            {asistente ?
              <>
                <div className="image-container">
                  <img src={`http://localhost:8080/${asistente.imagen}`} />
                </div>
                <div className="text-container">
                  <div className="name">{asistente.nombre}</div>
                  <div className="puesto-empleo">{asistente.puesto}</div>
                  <div>{asistente.empresa}</div>
                </div>
              </>
              :
              <p>Loading...</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsistenteDetails;
