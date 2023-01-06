const { Sequelize } = require("sequelize");
const databaseConfig = require("../../config/database");
const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig.options);

module.exports = sequelize;