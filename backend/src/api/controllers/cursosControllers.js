const req = require('express/lib/request');
const Cursos = require('../models/cursosModels.js'); /* Importa o modelo de dados */

module.exports = {
    
    async index(requisicao, resposta){
        const cursos = await Cursos.findAll();
        return resposta.json(cursos);
    },

    async store(req, res) {
       const cursos = await Cursos.create(req.body);
       return res.json({cursos})       
//       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cat_descricao } = req.body
        console.log("Nova Descrição: " + cat_descricao)

        await Cursos.update({
            cat_descricao

        }, {
            where: { id: codigo_id}
        })

        return res.json({message: "Registro atualizado com sucesso!"})
     },

     async delete(req, res) {
        const { codigo_id } = req.params
        await Cursos.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Curso Deletado!!!'
        })

     },

     async indexId(req, res) {
        const { codigo_id } = req.params

        const cursos = await Cursos.findByPk(codigo_id)

        return res.json(cursos)



     },
 
}


