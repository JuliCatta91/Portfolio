import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar } from './components/Navbar/Navbar';
import { SobreMi } from './components/SobreMi/SobreMi';
import { QueHago } from './components/QueHago/QueHago';
import { ImgSola } from './components/ImgSola/ImgSola';
import { Experiencia } from './components/Experiencia/Experiencia';
import { Portfolio } from './components/Portfolio/Portfolio';
// import { Form } from './components/Form/Form';
import { PruebaForm } from './components/PruebaForm/PruebaForm';












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <SobreMi />
    <QueHago />
    <ImgSola />
    <Experiencia />
    <Portfolio />
    {/* <Form /> */}
    <PruebaForm />
  </React.StrictMode>
);
