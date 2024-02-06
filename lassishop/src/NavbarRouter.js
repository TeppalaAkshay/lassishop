import React from "react";
import { Home } from "./pages/Home";
import { Contactus } from "./pages/Contactus";
import { Menu } from "./pages/Menu";
import {BrowserRouter,Route, Routes} from "react-router-dom";

const NavbarRouter = () => { 
return(
        <div>
         <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
      </BrowserRouter>

         </div>
    )};
export default NavbarRouter;