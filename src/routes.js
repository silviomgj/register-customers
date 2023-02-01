const { Router } = require("express");
const multer = require('multer');
const multerConfig = require('./config/multer')
const upload = multer(multerConfig);

const CustomerController = require('./app/controllers/CustomerController');
const AddressController = require('./app/controllers/AddressController');
const DocumentsController = require('./app/controllers/DocumentsController');

const routes = new Router();

routes.get('/customers', CustomerController.show);
routes.get('/customers/:id', CustomerController.index);
routes.post('/customers', CustomerController.store);
routes.delete('/customers/:id', CustomerController.delete);
routes.put('/customers', CustomerController.update);

routes.get('/addresses', AddressController.show);
routes.get('/addresses/:id', AddressController.index);
routes.post('/addresses', AddressController.store);
routes.delete('/addresses/:id', AddressController.delete);
routes.put('/addresses', AddressController.update);

routes.get('/documents', DocumentsController.show);
routes.post('/documents', upload.single('photo'), DocumentsController.store);

module.exports = routes;