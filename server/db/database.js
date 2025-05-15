require('dotenv').config({ path: './env/.env' });
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('trouve_ton_artisan', 'admin2', process.env.password, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false
});


const connectDB = () => {
    try {   sequelize.authenticate();   
        console.log('Connecté à la base de données MySQL!'); } 
        catch (error)
       {   console.error('Impossible de se connecter, erreur suivante :', error); }
};




module.exports = {sequelize, connectDB};