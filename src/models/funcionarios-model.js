// filepath: /home/professor/Projetos/user-api-v2/src/models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Funcionario = sequelize.define('Funcionario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CPF: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Funcionario;