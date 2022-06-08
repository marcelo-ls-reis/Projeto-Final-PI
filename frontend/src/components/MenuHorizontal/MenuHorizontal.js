import React from "react";
import { Link } from "react-router-dom"

import "./MenuHorizontal.css"

function MenuHorizontal() {
  return (
    <div className="divder">
      <nav className="navMenu">
        <ul>
          <li> <Link to="/">Início </Link> </li>          
          <li> <Link to="/usuarios">Usuarios </Link> </li>
          <li> <Link to="/cursos">Cursos </Link> </li>
          <li> <Link to="/Vagas">Vagas </Link> </li>
          <li> <Link to="/empresas">Empresas </Link> </li>          
        </ul>
      </nav>
    </div>
  );
}

export default MenuHorizontal;
