// TutorScreen.js updated
import React, { useState } from 'react';
import './TutorScreen.css';
import logo from './imagenes/Logo.png';
import Editor from '@monaco-editor/react';

const TutorScreen = ({ onBack }) => {
  const [output, setOutput] = useState("");

  const handleExecuteCode = (value) => {
    // Simulate Java code execution
    const outputValues = [];
    const regex = /System\.out\.println\("(.*?)"\)/g;
    let match;
    while ((match = regex.exec(value)) !== null) {
      outputValues.push(match[1]);
    }
    if (outputValues.length > 0) {
      setOutput(outputValues.join('\n'));
    } else {
      setOutput("Error: Código no reconocido.");
    }
  };

  return (
    <div className="tutor-screen-container">
      <div className="header">
        <h2 className="title">Ejercicio N°1. Tema: "Hola mundo Java"</h2>
        <img src={logo} alt="Tutorcode AI Logo" className="tutor-logo" />
      </div>
      <h2 className="enunciado">Enunciado: Has un codigo que imprima la palabra hola mundo</h2>
      <div className="tutor-content">
        <div className="student-input-container">
          <Editor
            height="500px"
            defaultLanguage="java"
            defaultValue="// Escribe tu código de Java aquí"
            theme="vs-dark"
            options={{
              lineNumbers: 'on',
              tabSize: 4,
              minimap: { enabled: false },
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto'
              },
              fontFamily: 'monospace',
              fontSize: 14,
              cursorStyle: 'line',
              wordWrap: 'on',
              folding: true,
              autoClosingBrackets: 'always',
              matchBrackets: 'always',
              suggestOnTriggerCharacters: true,
              language: 'java'
            }}
          />
        </div>
        <div className="submit-container">
          <button className="submit-button" onClick={() => handleExecuteCode(document.querySelector('.monaco-editor textarea').value)}>&gt;</button>
        </div>
        <div className="tutor-response-container">
          <p className="tutor-window-title">Ventana del tutor:</p>
          <p>- Retroalimentación.</p>
          <p>- Sugerencias.</p>
          <p>- Correcciones.</p>
          <div className="terminal-output expanded">
            <p>Resultado de la ejecución:</p>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
      <div className="navigation">
        <button className="previous-button" onClick={onBack}>Anterior</button>
        <button className="next-button">Siguiente</button>
      </div>
    </div>
  );
};

export default TutorScreen;
