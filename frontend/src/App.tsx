import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ListClaims from './pages/ListClaims';
import LoginPage from './pages/LoginPage';
import UserContext from './context/UserContext';
import { User } from './data/users';

function App() {
  const [user, setUser] = useState<User>();
  const [jwt, setJwt] = useState<string>();

  return (
    <UserContext.Provider value={{user, setUser, jwt, setJwt}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/ListClaims" element= {<ListClaims />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
