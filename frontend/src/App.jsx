import React from 'react';
import "./App.css";  
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Login from './pages/auth/login';
import About from './pages/about/About';
import Account from './pages/account/Account';





const App = () => {
  return <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/account" element={<Account/>} />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/register" element={<Register/>} />
      <Route path ="/verify" element={<Verify/>} />
    </Routes>
    </BrowserRouter>
  </>;
}

export default App