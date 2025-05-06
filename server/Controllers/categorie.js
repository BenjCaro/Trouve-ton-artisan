const {Artisan, Specialite, Categorie} = require('../Models');

exports.getAllArtisanByCategorie = async (req, res) => {
    try {
         
        const slug = req.params.slug;

        const categorie = await Categorie.findOne({
            where: { slug: slug }, // insérer le slug ici 
            attributes: ['nom_categorie'],
            include: [{
                model: Specialite,
                attributes: ['nom_specialite'],
                include: [{
                    model: Artisan,
                    attributes: ['nom_artisan']
                }]
            }]
        });

         res.json(categorie);

    } catch {
        res.status(500).json({message : 'Erreur'});
    }
};



