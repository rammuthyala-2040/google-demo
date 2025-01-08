import react from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComp from "./components/CardComp"
import MakeIt from "./components/MakeIt"
import Password from './components/Password';
import PasswordManager from './components/PasswordManager';



import React from 'react'
import Question from './components/Question';
import Footer from './components/Footer';
import Exp from './components/Exp';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Section/>
    <CardComp />
    <MakeIt />
   <Password/>
    <PasswordManager />
    <Exp />
    <Question />
    <Footer />
   
    <Routes>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
