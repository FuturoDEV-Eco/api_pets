const  {Router} = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router()

usuariosRoutes.post('/', UsuarioController.criarConta
    /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para criar um usuário',
        #swagger.parameters['criarUsuario'] = {
            in: 'body',
            description: 'Dados do usuário',
            required: true,
            schema: { 
                $nome: "Usuario Teste",
                $email: "teste@gmail.com",
                $password: "teste123"
            }
        }
    */
)

module.exports = usuariosRoutes