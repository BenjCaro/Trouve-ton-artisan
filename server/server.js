const express = require('express');
const path = require('path');
const { connectDB, sequelize } = require('./db/database');
const Artisan = require('./Models/artisan');
const Specialite = require('./Models/specialite');


connectDB();
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});



app.get('/api/artisan', async (req, res) => {
   const artisan = await Artisan.findAll({
    attributes: ['nom_artisan'],
    where: {
      top_artisan: true
    }
   });
   res.json(artisan);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});