const Categorie = require('./categorie');


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Specialite', {
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
};


