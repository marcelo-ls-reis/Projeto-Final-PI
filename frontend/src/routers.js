import React from "react";
import Geral from "./components/Geral/Geral.js"
// import Usuarios from "./components/Usuarios/Usuarios.js"

import { Route, Routes } from "react-router-dom"
import Usuarios from "./components/Ususarios/Usuarios.js";
import Cursos from "./components/Cursos/Cursos.js";
import Vagas from "./components/Vagas/Vagas.js";
import Empresas from "./components/Empresas/Empresas.js";

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Geral />} />
            <Route exact path="/usuarios" element={<Usuarios />} />
            <Route exact path="/cursos" element={<Cursos />} />
            <Route exact path="/vagas" element={<Vagas />} />
            <Route exact path="/empresas" element={<Empresas />} />
        </Routes>
    )
}

export default Routers

