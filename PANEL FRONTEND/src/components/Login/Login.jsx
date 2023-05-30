import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

import Hands from "../../assets/hands.png";

const Login = () => {
  // const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {token} = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/evento");
    }
  }, [token]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(formData));

    const token = localStorage.getItem("token");

    

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="title-login">
        <img src={Hands} alt="" />
        <h1 className="login-word">Feevents</h1>
      </div>

      <form onSubmit={handleSubmit} className="formLogin">
        <div className="form-group">
          <hr />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onFormChange}
            required
            className="input-style"
            placeholder="  Escribe tu email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onFormChange}
            required
            className="input-style"
            placeholder="  Escribe tu contraseña"
          />
        </div>
        <button className="btn-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
