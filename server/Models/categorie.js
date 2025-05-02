const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/database');

const Categorie = sequelize.define(Categorie, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom_categorie: {
        type: DataTypes.STRING(55)
    }
});