'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

Route.post('/drugstores', "DrugstoreController.create").middleware('auth')
Route.get('/drugstores', "DrugstoreController.index")

Route.post('/drugstore/:id/products', "ProductController.create")

Route.get('/orders/actives/:drugstore_id', "OrderController.getAllOrdersByDrugstoreId")
Route.get('/products', "ProductController.index")