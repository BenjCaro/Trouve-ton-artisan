const { sequelize } = require('../db/database');
const { DataTypes } = require('sequelize');

const Artisan = require('./artisan')(sequelize, DataTypes);
const Specialite = require('./specialite')(sequelize, DataTypes);
const Categorie = require('./categorie')(sequelize, DataTypes);


Artisan.belongsTo(Specialite, { foreignKey: 'specialite' });
Specialite.hasMany(Artisan, { foreignKey: 'specialite' });

Specialite.belongsTo(Categorie, { foreignKey: 'categorie' });
Categorie.hasMany(Specialite, { foreignKey: 'categorie' });

module.exports = { sequelize, Artisan, Specialite, Categorie };
