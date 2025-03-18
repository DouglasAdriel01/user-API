// filepath: /home/professor/Projetos/user-api-v2/src/models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Agenda = sequelize.define('Agenda', {
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    id_Paciente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_Funcionario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    observacao: {
        type: DataTypes.STRING,
    },
    
});

module.exports = Agenda;