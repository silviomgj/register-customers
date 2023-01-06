const { Router } = require("express");

const CustomerController = require('./app/controllers/CustomerController');

const routes = new Router();

routes.get('/customers', CustomerController.show);

module.exports = routes;