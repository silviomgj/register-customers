require("dotenv/config");
require('express-async-errors');

const express = require("express");
const routes = require("./routes");
const path = require('path');
const apiHandlingError = require("./middlewares/apiHandlingError");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/temp/uploads', express.static(path.resolve(__dirname, "..", "temp", "uploads")));
    this.server.use(routes);
    this.server.use(apiHandlingError);
  }

}

module.exports = new App().server;