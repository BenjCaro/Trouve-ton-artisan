require('dotenv').config({ path: './env/.env' });
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: false
});


const connectDB = () => {
    try {   sequelize.authenticate();   
        console.log('Connecté à la base de données MySQL!'); } 
        catch (error)
       {   console.error('Impossible de se connecter, erreur suivante :', error); }
};




module.exports = {sequelize, connectDB};