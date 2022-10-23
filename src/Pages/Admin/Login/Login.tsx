import React, { useState } from "react";
import "./login.css";
import logo from "../../../assets/images/gs-logo-half.png";

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
          <input
            type="text"
            onChange={handleChange}
            className="ae-text-input login"
            name="username"
            placeholder="Username"
            autoComplete="off"
            value={input.username}
          />
          <input
            type="password"
            onChange={handleChange}
            className="ae-text-input login"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={input.password}
          />
          <div className="ae-login-button" onClick={handleLogin}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
