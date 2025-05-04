const {Artisan, Specialite, Categorie} = require('../Models');

exports.getAllArtisanByCategorie = async (req, res) => {
    try {
         
        const artisan = await Artisan.findAll({
            attributes: ['nom_artisan', 'note', 'ville'],
            include: [{
                model: Specialite,
                attributes: ['nom_specialite'],
                include: [{
                    model: Categorie,
                    attributes: ['nom_categorie'],
                    where: 
                       {nom_categorie: 'alimentation'} // lier req.params ici 
                }]

            }],
                 where: {'$Specialite.Categorie.nom_categorie$' : 'alimentation'} // lier req.params ici 
        });

        res.json(artisan);

    } catch {
        res.status(500).json({message : 'Erreur'});
    }
};



