const { Sequelize } = require("sequelize");
const sequelize = require("../database");

const Address = sequelize.define("enderecos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    publicPlace: {
        field: 'logradouro',
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        field: 'numero',
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        field: 'bairro',
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        field: 'cidade',
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        field: 'estado',
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode: {
        field: 'cep',
        type: Sequelize.STRING,
        allowNull: false
    }    
}, {timestamps: false});

module.exports = Address;