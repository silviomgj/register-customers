const { Sequelize } = require("sequelize");
const sequelize = require("../database");

const Customer = sequelize.define("clientes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nasc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conjuge: {
        type: Sequelize.STRING,
        allowNull: false 
    }
}, {timestamps: false} );

module.exports = Customer;