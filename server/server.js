const express = require('express');
const path = require('path');
require('dotenv').config({ path: './env/.env' });
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trouve_ton_artisan', 'admin', process.env.password, {
  host: 'localhost',
  dialect: 'mysql'
});

try {   sequelize.authenticate();   
  console.log('Connecté à la base de données MySQL!'); } 
  catch (error)
 {   console.error('Impossible de se connecter, erreur suivante :', error); }

const app = express();



app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});