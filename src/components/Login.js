import React, { useState } from 'react';
import './Login.css';  // Cambiado a Login.css para estilos específicos de este componente
import logo from './imagenes/Logo.png';

function Login({ onLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginClick = () => {
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Tutorcode AI" className="login-logo" />
        <h2>INICIAR SESIÓN</h2>
        <div className="input-container">
          <input type="text" placeholder="@Username" className="input-field" />
        </div>
        <div className="input-container" style={{ position: 'relative' }}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="••••••••"
            className="input-field"
          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? '🙈' : '👁️'}
          </span>
        </div>
        <button className="login-button" onClick={handleLoginClick}>Ingresar</button>
        <div className="register-link">
          ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
