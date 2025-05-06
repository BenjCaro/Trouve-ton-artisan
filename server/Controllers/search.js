const {Artisan} = require('../Models');
const { Op } = require('sequelize');
exports.searchArtisanByName = async (req, res) => {
        try {
         const nom = req.query.nom;

         const artisan = await Artisan.findOne({
                where: {nom_artisan: { [Op.like]: `%${nom}%` }}
         });

         if (!artisan) {
                console.log("Aucun artisan trouvé :", nom_artisan);
                return res.status(404).json({ message: "Artisan non trouvé" });
            }

         res.json(artisan);
            
        } catch (error) {
                console.error("Erreur serveur :", error);
                res.status(500).json({ message: "Erreur interne", error: error.message });
        }
};