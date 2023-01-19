const { Sequelize } = require("sequelize");
const sequelize = require("../database");

const Customer = sequelize.define("clientes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        field: 'nome',
        type: Sequelize.STRING,
        allowNull: false
    },
    familyName: {
        field: 'sobrenome',
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDate: {
        field: 'data_nasc',
        type: Sequelize.STRING,
        allowNull: false
    },
    spouse: {
        field: 'conjuge',
        type: Sequelize.STRING,
        allowNull: false 
    }
}, {timestamps: false} );

module.exports = Customer;