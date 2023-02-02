require("dotenv/config");

const express = require("express");
const routes = require("./routes");
const path = require('path');

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
  }

}

module.exports = new App().server;