'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users', 'UserController').apiOnly()

Route.resource('/candidatos', 'CandidatoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Candidato' ],
 ]))

Route.resource('/cargos', 'CargoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Cargo' ],
 ]))

Route.resource('/departamentos', 'DepartamentoController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'Departamento' ],
     ]))

Route.resource('/empresas', 'EmpresaController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'Empresa' ],
     ]))

Route.resource('/opcaoPergunta', 'OpcaoPerguntaController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'OpcaoPergunta' ],
     ]))

Route.resource('/perguntas', 'PerguntaController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'Pergunta' ],
     ]))

Route.resource('/recrutadores', 'RecrutadorController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'Recrutador' ],
     ]))
     
Route.resource('/testePerguntas', 'TestePerguntaController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'TestePergunta' ],
     ]))
     
Route.resource('/testeSeletivos', 'TesteSeletivoController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'TesteSeletivo' ],
     ]))

Route.resource('/vagas', 'VagaController')
     .apiOnly()
     .validator(new Map([
          [['store', 'update'], 'Vaga' ],
     ]))

