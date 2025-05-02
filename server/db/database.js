require('dotenv').config({ path: './env/.env' });
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('trouve_ton_artisan', 'admin', process.env.password, {
  host: 'localhost',
  dialect: 'mysql'
});


const connectDB = () => {
    try {   sequelize.authenticate();   
        console.log('Connecté à la base de données MySQL!'); } 
        catch (error)
       {   console.error('Impossible de se connecter, erreur suivante :', error); }
};




module.exports = {sequelize, connectDB};