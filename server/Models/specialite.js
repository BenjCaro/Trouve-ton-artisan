const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/database');

const Specialite = sequelize.define(Specialite, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom_specialite: {
        type: DataTypes.STRING(55),
        
    },

    categorie: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorie,
            key: 'id'
        }
    }

});

Specialite.belongsTo(Categorie, {
    foreignKey: 'categorie'
});

Categorie.hasMany(Specialite, {
    foreignKey: 'categorie'
});