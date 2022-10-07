import './App.css';
import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage'
import Coinpage from './pages/Coinpage';
import { customStyles } from './Style';

const App = () => {

  return (
    <>
    <div style={customStyles.app}>
    <Header/>
    <Routes>
    <Route path = "/" element = {<Homepage/>} />
    <Route path = "/coins/:id" element = {<Coinpage/>} />
    </Routes>
    <div>hello world from app</div>
    </div>
    </>
  )
}

export default App