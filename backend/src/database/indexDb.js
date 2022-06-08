const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const usuarios = require('../api/models/usuariosModels')
const cursos = require('../api/models/cursosModels')
const empresas = require('../api/models/empresasModels')
const vagas = require('../api/models/vagasModels')
//const aplicacaoVagas = require('../api/models/aplicacaoVagasModels')


const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

usuarios.init(conexao)
cursos.init(conexao)
empresas.init(conexao)
vagas.init(conexao)
//aplicacaoVagas.init(conexao)

module.exports = conexao;
