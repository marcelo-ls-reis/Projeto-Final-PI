import React from "react";
import { useEffect, useState } from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";
import api from "../../services/api.js"
import Moment from 'react-moment'
import "./Vagas.css"

function Vagas() {
  const [vagas, setVagas] = useState([])
  useEffect(() => {
    api.get('vagas')
      .then(response => setVagas(response.data))
  }, []
  )

  return (
    <div id="idUsuarios" className="divider">
      <MenuHorizontal />
      <legend>Registros de Vagas Cadastrados</legend>
      <div className="divider">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_empresa'> Empresa </th>
              <th id='t_area'> Área </th>
              <th id='t_descricao'> Descrição </th>
              <th id='t_margemsalarial'> Salário </th>
              <th id='t_vagasdisponiveis'> Vagas </th>
              <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>
              <th id='t_sobra'></th>
              <th></th>
            </tr>
          </thead>
          <br></br>
          <tbody>
            {vagas.map((item, i) => {
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
              <td>{vagas.length} Registros </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Vagas;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
