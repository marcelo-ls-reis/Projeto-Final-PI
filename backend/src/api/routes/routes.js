const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const usuariosControllers = require('../controllers/usuariosControllers.js')
const cursosControllers = require('../controllers/cursosControllers.js')
const empresasControllers = require('../controllers/empresasControllers.js')
const vagasControllers = require('../controllers/vagasControllers.js')
//const aplicacaoVagasControllers = require('../controllers/aplicacaoVagasControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rotas de usuarios
routes.get('/usuarios', usuariosControllers.index)
routes.post('/usuarios', usuariosControllers.store)
routes.put('/usuarios/:codigo_id', usuariosControllers.update)
routes.delete('/usuarios/:codigo_id', usuariosControllers.delete)
routes.get('/usuarios/:codigo_id', usuariosControllers.indexId)

// rotas de cursos
routes.get('/cursos', cursosControllers.index)
routes.post('/cursos', cursosControllers.store)
routes.put('/cursos/:codigo_id', cursosControllers.update)
routes.delete('/cursos/:codigo_id', cursosControllers.delete)
routes.get('/cursos/:codigo_id', cursosControllers.indexId)


// rotas de empresas
routes.get('/empresas', empresasControllers.index)
// routes.post('/times', timesControllers.store)
// routes.put('/times/:codigo_id', timesControllers.update)
// routes.delete('/times/:codigo_id', timesControllers.delete)

routes.get('/vagas', vagasControllers.index)
//routes.get('/aplicacaoVagas', aplicacaoVagasControllers.index)

module.exports = routes

