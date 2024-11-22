import React, { useState } from 'react';
import './SelectionScreen.css';
import javaLogo from './imagenes/javalogo.png';
import cLogo from './imagenes/clogo.png';
import pythonLogo from './imagenes/Pythonlogo.png';
import progresoIcon from './imagenes/Progreso.png';
import perfilIcon from './imagenes/editar_perfil.png'; // Cambié el nombre para evitar problemas con espacios
import TutorScreen from './TutorScreen';
import TutorScreenCPlusPlus from './TutorScreenCPlusPlus';
import TutorScreenPython from './TutorScreenPython';
import ProfileScreen from './ProfileScreen'; // Importa el componente ProfileScreen
import ProgressScreen from './ProgressScreen'; // Importa el componente ProgressScreen

function SelectionScreen() {
  const [showScreen, setShowScreen] = useState(null);

  const handleJavaClick = () => {
    setShowScreen('java');
  };

  const handleCPlusPlusClick = () => {
    setShowScreen('cpp');
  };

  const handlePythonClick = () => {
    setShowScreen('python');
  };

  const handleProfileClick = () => {
    setShowScreen('profile');
  };

  const handleProgressClick = () => {
    setShowScreen('progress');
  };

  const handleBackClick = () => {
    setShowScreen(null);
  };

  return (
    <div className="selection-container">
      {showScreen === 'java' ? (
        <TutorScreen onBack={handleBackClick} />
      ) : showScreen === 'cpp' ? (
        <TutorScreenCPlusPlus onBack={handleBackClick} />
      ) : showScreen === 'python' ? (
        <TutorScreenPython onBack={handleBackClick} />
      ) : showScreen === 'profile' ? (
        <ProfileScreen onBack={handleBackClick} />
      ) : showScreen === 'progress' ? (
        <ProgressScreen onBack={handleBackClick} />
      ) : (
        <>
          <h2>SELECCIONE EL LENGUAJE DE PROGRAMACIÓN QUE DESEA PRACTICAR</h2>
          <div className="languages">
            <div className="language-option" onClick={handleJavaClick}>
              <img src={javaLogo} alt="Java Logo" />
            </div>
            <div className="language-option" onClick={handleCPlusPlusClick}>
              <img src={cLogo} alt="C++ Logo" />
            </div>
            <div className="language-option" onClick={handlePythonClick}>
              <img src={pythonLogo} alt="Python Logo" />
            </div>
          </div>
          <div className="footer">
            <div className="footer-option" onClick={handleProgressClick}>
              <img src={progresoIcon} alt="Progreso Icon" style={{ width: '48px', height: '48px' }} />
              <p>PROGRESO</p>
            </div>
            <div className="footer-option" onClick={handleProfileClick}>
              <img src={perfilIcon} alt="Perfil Icon" style={{ width: '48px', height: '48px' }} />
              <p>PERFIL</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SelectionScreen;
