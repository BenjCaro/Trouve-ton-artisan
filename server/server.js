const express = require('express');
const path = require('path');
const { connectDB, sequelize } = require('./db/database');
const topRouter = require('./Routes/topRoute');



connectDB();
const app = express();
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.use('/api/top-artisan', topRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});