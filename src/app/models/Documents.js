const { Sequelize } = require("sequelize");
const sequelize = require("../database");

const Documents = sequelize.define("documentos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    indentificationDocument: {
        field: 'rg',
        type: Sequelize.STRING,
        allowNull: false
    },
    socialSecurity: {
        field: 'cpf',
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        field: 'foto',
        type: Sequelize.BLOB("long"),
        allowNull: false
    }
}, {timestamps: false} );

module.exports = Documents;