const {Artisan, Specialite} = require('../Models');


exports.getTopArtisan = async (req, res) => {
    try {
       
        const artisan = await Artisan.findAll({
            attributes: ['id','nom_artisan', 'note', 'ville'],
            where: {
               top_artisan: true
            },
            include: {
            model: Specialite,
            attributes: ['nom_specialite']
             },
             order: [['note', 'DESC']]
            });
            
            res.json(artisan);
         
    } catch (error) {
        res.status(500).json({message : 'Erreur'});
    }
 };