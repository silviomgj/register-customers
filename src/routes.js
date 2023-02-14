const { Router } = require("express");
const multer = require('multer');
const multerConfig = require('./config/multer')
const upload = multer(multerConfig);

const CustomerController = require('./app/controllers/CustomerController');
const CustomerAddressController = require('./app/controllers/CustomerAddressController');
const CustomerDocumentsController = require('./app/controllers/CustomerDocumentsController');

const routes = new Router();

routes.get('/customers', CustomerController.show);
routes.get('/customers/:id', CustomerController.index);
routes.post('/customers', CustomerController.store);
routes.delete('/customers/:id', CustomerController.delete);
routes.put('/customers', CustomerController.update);
routes.get('/customers/:id/documents', CustomerDocumentsController.show);
routes.post('/customers/:id/documents', upload.single('photo'), CustomerDocumentsController.store);
routes.get('/customers/:customerId/documents/:documentId', CustomerDocumentsController.index);
routes.delete('/customers/:customerId/documents/:documentId', CustomerDocumentsController.delete);
routes.get('/customers/:id/addresses', CustomerAddressController.show);
routes.post('/customers/:id/addresses', CustomerAddressController.store);
routes.get('/customers/:customerId/addresses/:addressId', CustomerAddressController.index);
routes.delete('/customers/:customerId/addresses/:addressId', CustomerAddressController.delete);
routes.put('/customers/:customerId/addresses/:addressId', CustomerAddressController.update);

module.exports = routes;