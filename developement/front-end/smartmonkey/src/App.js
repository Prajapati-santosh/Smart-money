import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import PageNotFound from './Components/404Page/PageNotFound';
import Login from './Components/Auth/Login';
import MyExpense from './Components/ExpenseDashboard/MyExpense';
import AuthContext from './context/AuthContext';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isAutheticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    fetch('https://nodejs-serverless-function-express-psi-hazel.vercel.app/getInfo',{credentials:'include'})
    .then((res)=>{
      if(!res){
        setIsAuthenticated(true);
        // eslint-disable-next-line
        console.log(isAutheticated+" "+"api called"+res);
      }
    }).catch((error)=>{
        setIsAuthenticated(false);
    })
  },[isAutheticated])
  return (
  <AuthContext.Provider value={{ isAutheticated, setIsAuthenticated }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        {isAutheticated ? (
          <Route path="/dashboard" element={<MyExpense />} />
        ) : (
          <Route path="/Login" element={<Login />} />
        )}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
);
}

export default App;
