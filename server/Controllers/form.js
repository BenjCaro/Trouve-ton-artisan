const { body, validationResult } = require("express-validator");

exports.sendMessage = [
    // ✅ Validation des entrées avec Express Validator
    body("name").notEmpty().withMessage("Le nom est requis."),
    body("email").isEmail().withMessage("Email invalide."),
    body("objet").notEmpty().withMessage("L'objet est requis."),
    body("message").notEmpty().withMessage("Le message ne doit pas être vide."),

    // ✅ Fonction principale de la route après validation
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        // ✅ Affichage des données validées
        console.log("Données reçues :", req.body);

        res.json({ success: true, message: "Message bien reçu !" });
    }
];








