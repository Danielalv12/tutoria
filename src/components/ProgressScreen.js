import React from 'react';
import './ProgressScreen.css';
import progresoIcon from './imagenes/Progreso.png';
import perfilIcon from './imagenes/editar_perfil.png';

const ProgressScreen = ({ onBack }) => {
  return (
    <div className="progress-screen-container">
      <div className="progress-header">
        <h2>PROGRESO</h2>
      </div>
      <div className="progress-content">
        <div className="progress-graph">
          <img src={progresoIcon} alt="Gráfico de Progreso" className="progress-graph-image" />
        </div>
        <div className="progress-details">
          <p><span className="progress-indicator java"></span> JAVA</p>
          <p><span className="progress-indicator python"></span> PYTHON</p>
          <p><span className="progress-indicator cpp"></span> C++</p>
        </div>
      </div>
      <div className="progress-footer">
        <div className="footer-option" onClick={onBack}>
          <img src={progresoIcon} alt="Progreso Icon" className="footer-icon" />
          <p>PROGRESO</p>
        </div>
        <div className="footer-option" onClick={onBack}>
          <img src={perfilIcon} alt="Perfil Icon" className="footer-icon" />
          <p>PERFIL</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressScreen;
