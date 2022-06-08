const req = require('express/lib/request');
const Usuarios = require('../models/usuariosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const usuarios = await Usuarios.findAll();
        return resposta.json(usuarios);
    },

    async store(req, res) {
       const categoria = await Usuarios.create(req.body);
       return res.json({categoria})       
//       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cat_descricao } = req.body
        console.log("Nova Descrição: " + cat_descricao)

        await Usuarios.update({
            cat_descricao

        }, {
            where: { id: codigo_id}
        })

        return res.json({message: "Registro atualizado com sucesso!"})
     },

     async delete(req, res) {
        const { codigo_id } = req.params
        await Usuarios.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Cadegoria deletada!!!'
        })

     },

     async indexId(req, res) {
        const { codigo_id } = req.params

        const categoria = await Usuarios.findByPk(codigo_id)

        return res.json(categoria)



     },
 
}


