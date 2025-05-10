exports.sendMessage = (req, res) => {

    const {name, email, objet, message} = req.body;
    console.log("Données reçues :", req.body);
    res.json({ success: true, message: "Message bien reçu !" });

};








