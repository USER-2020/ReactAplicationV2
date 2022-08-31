import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./pages/Registro";

function Direccionamiento(){
    return(
        <Routes>
            <Route path = "" element = {<Home/>}/>
            <Route path = "registro" element = {<Registro/>}/>
        </Routes>
    );
}

export default Direccionamiento;