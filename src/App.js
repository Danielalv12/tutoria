import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';  // Importa el componente Login
import SelectionScreen from './components/SelectionScreen'; // Importa el componente SelectionScreen

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <SelectionScreen /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
