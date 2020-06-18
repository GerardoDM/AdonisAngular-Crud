'use strict'

const Personaje = require('../app/Models/Personaje')
const PersonajeController = require('../app/Controllers/Http/PersonajeController')

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

//Users
Route.group(() => {

  Route.post('login' , 'UserController.login')
  Route.post('register' , 'UserController.register')

}).prefix('users')


//Personajes
Route.group(() => {

  Route.post('create' , 'PersonajeController.create')
  Route.delete('delete/:id', 'PersonajeController.destroy')
  Route.patch('update/:id', 'PersonajeController.update')
  Route.get('index', 'PersonajeController.index')

}).prefix('personajes')




