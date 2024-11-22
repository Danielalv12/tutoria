import React from 'react';
import './ProfileScreen.css';
import perfilLogo from './imagenes/perfil.png';
import editarPerfilIcon from './imagenes/editar_perfil.png';
import progresoIcon from './imagenes/Progreso.png';

const ProfileScreen = ({ onBack }) => {
  const handleProfileClick = () => {
    onBack(); // Esta función se usará para regresar a la pantalla de selección.
  };

  return (
    <div className="profile-screen-container">
      <div className="profile-header">
        <img src={perfilLogo} alt="Perfil" className="profile-image" />
        <div className="profile-username">
          <p>@Username</p>
          <img src={editarPerfilIcon} alt="Editar perfil" className="edit-profile-icon" />
        </div>
      </div>
      <div className="profile-info">
        <h3>DATOS</h3>
        <p><strong>Nombre:</strong> XXXXXX XXXXXX XXXXX XXXXXX</p>
        <p><strong>Correo electrónico:</strong> XXXXXX@XXXX.XXX</p>
      </div>
      <div className="profile-footer">
        <div className="footer-option">
          <img src={progresoIcon} alt="Progreso Icon" className="footer-icon" />
          <p>PROGRESO</p>
        </div>
        <div className="footer-option" onClick={handleProfileClick}>
          <img src={editarPerfilIcon} alt="Perfil Icon" className="footer-icon" />
          <p>PERFIL</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
