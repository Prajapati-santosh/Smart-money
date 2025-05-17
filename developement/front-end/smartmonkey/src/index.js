import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Components/404Page/PageNotFound';
import Login from './Components/Auth/Login';
import MyExpense from './Components/ExpenseDashboard/MyExpense';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/MyExpense' element={<MyExpense/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
