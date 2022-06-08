import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import AreaDados from "../AreaDados/AreaDados";
import Rodape from "../Rodape/Rodape";
import "./Geral.css"

function Geral() {
  return (
    <div className="geral">
      <MenuHorizontal />
      <AreaDados />
      <Rodape />
    </div>
  );
}

export default Geral;
