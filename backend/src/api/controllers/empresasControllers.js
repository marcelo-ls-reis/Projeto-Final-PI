const Empresas = require('../models/empresasModels.js');

module.exports = {
    
    async index(req, res){
        const empresas = await Empresas.findAll();
        return res.json(empresas);
    },
}