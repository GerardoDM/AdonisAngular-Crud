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



//Users
Route.group(() => {

  Route.post('login' , 'UserController.login')
  Route.post('register' , 'UserController.register')
  Route.get('show/:id', 'UserController.showUser')
  Route.get('index', 'UserController.index')
  

}).prefix('users')


//Personajes
Route.group(() => {

  Route.post('create' , 'PersonajeController.create').middleware(['auth'])
  Route.delete('delete/:id', 'PersonajeController.destroy').middleware(['auth'])
  Route.patch('update/:id', 'PersonajeController.update').middleware(['auth'])
  Route.get('index', 'PersonajeController.index').middleware(['auth'])
  Route.get('show/:userID', 'PersonajeController.show')

}).prefix('personajes')


Route.group(() => {

  Route.post('store' , 'WeaponController.store')
  Route.get('index' , 'WeaponController.index')
  Route.get('show/:userID', 'WeaponController.show')
  Route.delete('destroy/:_id', 'WeaponController.destroy')
  Route.patch('update/:_id', 'WeaponController.update')
 

}).prefix('weapons')




