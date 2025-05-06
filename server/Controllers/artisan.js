const {Artisan} = require('../Models');

exports.getArtisan = async (req, res) => {
    
    const id = Number(req.params.id); 

    try {
        const artisan = await Artisan.findOne({ where: { id: id } });
        
        if (!artisan) {
            console.log("Aucun artisan trouvé avec l'ID :", id);
            return res.status(404).json({ message: "Artisan non trouvé" });
        }

        res.json(artisan);
    } catch (error) {
        console.error("Erreur serveur :", error);
        res.status(500).json({ message: "Erreur interne", error: error.message });
    }
};
