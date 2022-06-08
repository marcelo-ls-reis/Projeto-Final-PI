import React from "react";
import { Link } from "react-router-dom"

import "./MenuHorizontal.css"
import "./headers.css"

function MenuHorizontal() {
  return (
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <span class="fs-4">Menu Principal</span>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
           <li> <Link class="nav-link px-2 link-dark" to="/">Início </Link> </li>
           <li> <Link class="nav-link px-2 link-dark" to="/usuarios">Usuarios </Link> </li>
           <li> <Link class="nav-link px-2 link-dark" to="/cursos">Cursos </Link> </li>
           <li> <Link class="nav-link px-2 link-dark" to="/Vagas">Vagas </Link> </li>
           <li> <Link class="nav-link px-2 link-dark" to="/empresas">Empresas </Link> </li>  
           <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>

  //   <div class="container">
  //   <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  //     <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
  //       <span class="fs-4">Simple header</span>
  //     </a>

  //     <ul class="divider">
  //          <li> <Link to="/">Início </Link> </li>
  //          <li> <Link to="/usuarios">Usuarios </Link> </li>
  //          <li> <Link to="/cursos">Cursos </Link> </li>
  //          <li> <Link to="/Vagas">Vagas </Link> </li>
  //          <li> <Link to="/empresas">Empresas </Link> </li>  
  //     </ul>
  //   </header>
  // </div>
    // <div className="divder">
    //   <nav className="navMenu">
    //     <ul>
    //       <li> <Link to="/">Início </Link> </li>          
    //       <li> <Link to="/usuarios">Usuarios </Link> </li>
    //       <li> <Link to="/cursos">Cursos </Link> </li>
    //       <li> <Link to="/Vagas">Vagas </Link> </li>
    //       <li> <Link to="/empresas">Empresas </Link> </li>          
    //     </ul>
    //   </nav>
    // </div>
  );
}

export default MenuHorizontal;
