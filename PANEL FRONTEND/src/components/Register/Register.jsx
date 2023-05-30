import React, { useState, useRef } from "react";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import Hands from "../../assets/hands.png";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "",
    puesto: "",
    empresa: "",
  });

  const fileInputRef = useRef(null); // Referencia al input de archivo

  const { nombre, email, password, puesto, empresa } = formData;

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    // No almacenamos el archivo en el estado formData
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0]; // Accedemos al archivo seleccionado a través de la referencia
    const formDataS = new FormData();
    formDataS.append("nombre", nombre);
    formDataS.append("email", email);
    formDataS.append("password", password);
    formDataS.append("puesto", puesto);
    formDataS.append("empresa", empresa);
    formDataS.append("imagen", file);
    dispatch(register(formDataS));
  };

  return (
    <div className="formContainer">
      <div className="title">
        <img src={Hands} alt="" />
        <h1 className="header-title register"> Me apunto</h1>
      </div>
      <div>
        <form className="formRegister" onSubmit={onSubmit}>
          <hr />
          <input
            className="inputRegister"
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Escribe tu nombre"
          />
          <input
            className="inputRegister"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder=" Correo electronico"
          />
          <input
            className="inputRegister"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Inserta tu contraseña"
          />
          <input
            className="inputRegister"
            type="text"
            name="puesto"
            value={puesto}
            onChange={onChange}
            placeholder="Puesto de trabajo"
          />
          <input
            className="inputRegister"
            type="text"
            name="empresa"
            value={empresa}
            onChange={onChange}
            placeholder="Nombre de la empresa"
          />
          <div className="select-files">
          <input
              className="inputFiles"
              type="file"
              ref={fileInputRef} // Asignamos la referencia al input de archivo
              onChange={handleFileChange}
              placeholder="Imagen"
            />
          </div>
          <div className="container-btn-r">
            <button className="btn-register" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
