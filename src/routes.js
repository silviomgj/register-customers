const { Router } = require("express");

const CustomerController = require('./app/controllers/CustomerController');

const routes = new Router();

routes.get('/customers', CustomerController.show);
routes.get('/customers/:id', CustomerController.index);
routes.post('/customers', CustomerController.store);

module.exports = routes;