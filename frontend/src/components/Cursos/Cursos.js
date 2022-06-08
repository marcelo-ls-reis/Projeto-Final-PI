import React from "react";
import { useEffect, useState } from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import api from "../../services/api.js"
import Moment from 'react-moment'
import "./Cursos.css"

function Cursos() {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    api.get('cursos')
      .then(response => setCursos(response.data))

  }, []
  )

  return (

    <div id="idCursos" className="divider">
      <MenuHorizontal />

      <legend>Registros de Cursos Cadastrados</legend>

      <div className="divider">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_area'> Cursos </th>
              <th id='t_descricao'> Descrição </th>
              <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>
              <th id='t_sobra'></th>
              <th></th>
            </tr>
          </thead>
          <br></br>

          <tbody>
            {cursos.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.id}</td>
                    <td id='p_descricao'>{item.cur_area}</td>
                    <td id='p_descricao'>{item.cur_descricao}</td>

                    <td id="p_dtinclusao"><Moment format="DD/MM/YYYY">{(item.createdAt)}</Moment> </td>

                    <td id='p_dtalteracao'><Moment format="DD/MM/YYYY">{item.updatedAt}</Moment> </td>

                    <td id="editar"> <a class="btn btn-primary btn-block"> Editar </a></td>
                    <td id="remover"> <a class="btn btn-danger btn-block"> Remover </a></td>

                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>{cursos.length} Registros</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Cursos;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
