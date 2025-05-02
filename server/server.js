const express = require('express');
const path = require('path');
const { connectDB, sequelize } = require('./db/database');

connectDB();
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});