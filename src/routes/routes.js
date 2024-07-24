const { Router } = require('express')

const responsaveisRoutes = require('./responsaveis.routes')
const cursosRoutes = require('./cursos.routes')
const usuariosRoutes = require('./usuarios.routes')
const permissoesRoutes = require('./permissoes.routes')
const LoginController = require('../controllers/LoginController')

const validaToken = require('../middlewares/validaToken')


const routes = new Router()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use('/usuarios', usuariosRoutes)
routes.post('/login', LoginController.login /*
    /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para logar um usuário',
        #swagger.parameters['loginUsuario'] = {
            in: 'body',
            description: 'Login do usuário',
            required: true,
            schema: { 
                $email: "teste@gmail.com",
                $password: "teste123"
            }
        }
    */
)
routes.use('/permissoes', validaToken, permissoesRoutes)

routes.use('/responsaveis', validaToken, responsaveisRoutes)
routes.use('/cursos', validaToken, cursosRoutes) // 'cursos'


module.exports = routes