import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/roboto";
import './Nav.css';
import NavbarRouter from './NavbarRouter';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<home/>} />
        <Route path="/menu" element={<menu/>} />
        <Route path="/contactus" element={<contactus/>} />
      </Routes>
      </BrowserRouter>
    </NavbarRouter>
  </React.StrictMode>
);


reportWebVitals();
