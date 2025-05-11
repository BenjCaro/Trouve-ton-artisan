const { body, validationResult } = require("express-validator");

exports.sendMessage = [
    
    body("name").notEmpty().withMessage("Le nom est requis."),
    body("email").isEmail().withMessage("Email invalide."),
    body("objet").notEmpty().withMessage("L'objet est requis."),
    body("message").notEmpty().withMessage("Le message ne doit pas être vide."),

    
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        
        console.log("Données reçues :", req.body);

        res.json({ success: true, message: "Message bien reçu !" });
    }
];








