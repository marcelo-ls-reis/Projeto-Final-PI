import React from "react";
import { useEffect, useState } from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import api from "../../services/api.js"
import Moment from 'react-moment'
import "./Usuarios.css"

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    api.get('usuarios')
      .then(response => setUsuarios(response.data))
  }, []
  )

  return (
    <div id="idUsuarios" className="divider">
      <MenuHorizontal />
      <legend>Registros de Usuarios Cadastrados</legend>
      <div className="divider">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_descricao'> Usuarios </th>
              <th id='t_telefone'> Telefone </th>
              <th id='t_email'> E_Mail </th>
              <th id='t_dtinclusao'> Inclusão </th>
              <th id='t_dtalteracao'> Alteração </th>
              <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>
              <th id='t_sobra'></th>
              <th></th>
            </tr>
          </thead>
          <br></br>
          <tbody>
            {usuarios.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.id}</td>
                    <td id='p_descricao'>{item.usu_nomecompleto}</td>
                    <td id='p_descricao'>{item.usu_telefonecontato}</td>
                    <td id='p_descricao'>{item.usu_emailcontato}</td>

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
              <td>{usuarios.length} Registros </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Usuarios;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
