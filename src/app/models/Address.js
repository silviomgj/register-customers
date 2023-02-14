const { Sequelize } = require("sequelize");
const sequelize = require("../database");

const Address = sequelize.define("enderecos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    streetAddress: {
        field: 'logradouro',
        type: Sequelize.STRING,
        allowNull: false
    },
    streetAddressNumber: {
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
    },
    customerId: {
        field: 'cliente_id',
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'id' },
        allowNull: false
    }
}, {timestamps: false});

module.exports = Address;