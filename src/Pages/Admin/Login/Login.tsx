import React, { useState } from "react";
import "./login.css";
import logo from "../../../assets/images/gs-logo-half.png";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    // DO API to login
    //  Set CONTEXT API
  };

  return (
    <div className="ae-page">
      <div className="ae-grid-content">
        <div id="status"></div>
        <div className="ae-login-form">
          <img src={logo} alt="logo"></img>
          <div className="ae-grid-label prime uppercase">Archelon</div>
          <div className="ae-grid-label sub uppercase">Management System</div>
          <CustomInput
            className="login"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            value={input.username}
          />
          <CustomInput
            className="login"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={input.password}
            type="password"
          />
          <Link to={"/app"}>
            <div className="ae-login-button" onClick={handleLogin}>
              Log in
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
