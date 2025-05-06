


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Categorie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
        nom_categorie: {
            type: DataTypes.STRING(55)
        },
        
        slug : {
            type: DataTypes.STRING(155)
        }
    },
        
        {
            timestamps: false
        });
};

