const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/database');
const Categorie = require('./categorie')

const Specialite = sequelize.define('Specialite', {
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
    }},

    {
        timestamps: false,
    });

Specialite.belongsTo(Categorie, {
    foreignKey: 'categorie'
});

Categorie.hasMany(Specialite, {
    foreignKey: 'categorie'
});

module.exports = Specialite;