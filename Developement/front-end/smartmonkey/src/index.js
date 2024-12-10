import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Login/>
    <Footer/>
  </React.StrictMode>
);
