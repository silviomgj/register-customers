const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize('cadastro-cliente', 'root', '0309', { dialect: 'mysql', host: 'localhost', dialectOptions: {} });

const Customer = sequelize.define("clientes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
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