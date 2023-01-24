const { Router } = require("express");

const CustomerController = require('./app/controllers/CustomerController');
const AddressController = require('./app/controllers/AddressController')

const routes = new Router();

routes.get('/customers', CustomerController.show);
routes.get('/customers/:id', CustomerController.index);
routes.post('/customers', CustomerController.store);
routes.delete('/customers/:id', CustomerController.delete);
routes.put('/customers', CustomerController.update);

routes.get('/addresses', AddressController.show);
routes.post('/addresses', AddressController.store);
routes.get('/addresses/:id', AddressController.index);
routes.put('/addresses', AddressController.update);

module.exports = routes;