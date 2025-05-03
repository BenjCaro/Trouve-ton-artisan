const express = require('express');
const path = require('path');

const { connectDB, sequelize } = require('./db/database');
const {Artisan, Specialite, Categorie} = require('./Models');



connectDB();
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Affiche le top 3 des Artisans
app.get('/api/artisan', async (req, res) => {
   const artisan = await Artisan.findAll({
    attributes: ['nom_artisan', 'note', 'ville'],
    where: {
      top_artisan: true
    },
    include: {
      model: Specialite,
      attributes: ['nom_specialite']
    }
   });
   res.json(artisan);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});