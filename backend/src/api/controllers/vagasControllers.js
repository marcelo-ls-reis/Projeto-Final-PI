const Vagas = require('../models/vagasModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const vagas = await Vagas.findAll();
        return resposta.json(vagas);
    },

}


