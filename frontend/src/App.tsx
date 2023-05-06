import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddClaims from './pages/AddClaims';
import EditClaims from './pages/EditClaims';
import Header from './pages/Header';
import ListClaims from './pages/ListClaims';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/ListClaims" element= {<ListClaims />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
