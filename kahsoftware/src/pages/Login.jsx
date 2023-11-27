import React, { useContext, useState } from "react";
import "./css/Login.css";
import {useNavigate } from "react-router-dom";
import {AuthContext} from "../context/authContext";
const Login = () => {

  const {login} = useContext(AuthContext);
  const [inputs,setInputs] = useState({
    username:"",
    password:""
  });
  
  const navigate = useNavigate();

  const handlChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlSubmit = async (e) =>{
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/adminsayfasi");
    } catch (err) {
      
      console.log(err)
    }
  };

  return (
    <div className="loginPage">
      <div className="login wrap">
        <div className="h1">Giriş Yap</div>
        <form>
          <input
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            placeholder="Username"
            id="username"
            name="username"
            type="text"
            required={true}
            onChange={handlChange}
          />
          <input
            placeholder="Şifre"
            id="password"
            name="password"
            type="password"
            required={true}
            onChange={handlChange}
          />
          <button onClick={handlSubmit} className="btn" >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
