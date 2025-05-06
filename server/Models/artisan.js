
const Specialite = require('./specialite');
module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Artisan', {
        id: {
            type: DataTypes.INTEGER,   
            primaryKey: true,
            autoIncrement: true
        },
    
        nom_artisan: {
            type: DataTypes.STRING(155)
        },
    
        specialite: {
            type: DataTypes.INTEGER,
            references: {
                model: Specialite,
                key: "id"
            }
        },
    
        note: {
            type: DataTypes.DECIMAL(2,1),
            allowNull: false
        },
    
        ville: {
            type: DataTypes.STRING(55),
            allowNull: false
        },
    
        a_propos: {
            type: DataTypes.TEXT
        },
    
        email: {
            type: DataTypes.STRING(155),
            unique: true,
            allowNull: false
        },
    
        site_web: {
            type: DataTypes.STRING(155)
        },
    
        top_artisan: {
            type: DataTypes.BOOLEAN
        }
    
    }, {
        timestamps: false 
    });

};





