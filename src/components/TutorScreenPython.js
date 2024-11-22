import React, { useState } from 'react';
import './TutorScreenPython.css';
import logo from './imagenes/Logo.png';
import Editor from '@monaco-editor/react';

const TutorScreenPython = ({ onBack }) => {
  const [output, setOutput] = useState("");

  const handleExecuteCode = (value) => {
    // Simulate Python code execution
    const outputValues = [];
    const regex = /print\("(.*?)"\)/g;
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
    <div className="tutor-screen-python-container">
      <div className="header-python">
        <h2 className="title-python">Ejercicio N°1. Tema: "Hola mundo" Python</h2>
        <img src={logo} alt="Tutorcode AI Logo" className="tutor-logo-python" />
      </div>
      <h2 className="enunciado-python">Enunciado: Has un codigo que imprima la palabra hola mundo</h2>
      <div className="tutor-content-python">
        <div className="student-input-container-python">
          <Editor
            height="500px"
            defaultLanguage="python"
            defaultValue="# Escribe tu código Python aquí"
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
              language: 'python'
            }}
          />
        </div>
        <div className="submit-container-python">
          <button className="submit-button-python" onClick={() => handleExecuteCode(document.querySelector('.monaco-editor textarea').value)}>&gt;</button>
        </div>
        <div className="tutor-response-container-python">
          <p className="tutor-window-title-python">Ventana del tutor:</p>
          <p>- Retroalimentación.</p>
          <p>- Sugerencias.</p>
          <p>- Correcciones.</p>
          <div className="terminal-output-python expanded">
            <p>Resultado de la ejecución:</p>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
      <div className="navigation-python">
        <button className="previous-button-python" onClick={onBack}>Anterior</button>
        <button className="next-button-python">Siguiente</button>
      </div>
    </div>
  );
};

export default TutorScreenPython;
