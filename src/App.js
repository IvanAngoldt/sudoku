import React, { useState } from 'react';
import Login from './authorization/Login';
import Register from './authorization/Register';
import Game from './game/components/Game';
import './index.css';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  //
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  return (
      <div>
        <Game />
        {/*{!isLoggedIn ? (*/}
        {/*    <div>*/}
        {/*      <Login onLogin={handleLogin} />*/}
        {/*      <Register />*/}
        {/*    </div>*/}
        {/*) : (*/}
        {/*    <Game onLogout={handleLogout} />*/}
        {/*)}*/}
      </div>
  );
}

export default App;