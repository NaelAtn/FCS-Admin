const { check , validationResult } = require("express-validator")

exports.mailValidator = () => [  
    check("name" , "Veuillez insérer votre Nom et Prénom !").not().isEmpty(),
    check("email" , "N'est pas un e-mail").isEmail(),
    check("phone" , "Veuillez insérer votre Numéro de téléphone ").not().isEmpty(),
    check("message" , "Veuillez insérer votre Message").not().isEmpty()
]

exports.loginValidator = () => [
    check("name" , "Veuillez insérer votre Nom !").not().isEmpty(),
    check("password" , "Veuillez insérer votre mot de passe !").not().isEmpty(),
]

exports.newsLetterValidator = () => [
    check("email" , "N'est pas un e-mail").isEmail()
]

exports.reservationValidator = () => [
    check("phone" , "Veuillez insérer votre Numéro de téléphone ").not().isEmpty(), 
    check("name" , "Veuillez insérer votre Nom et Prénom !").not().isEmpty(), 
    check("service" , "Veuillez insérer le type de service !").not().isEmpty(),
    check("time" , "Veuillez insérer l'heure !").not().isEmpty(),
]

exports.validation = (req , res , next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
     }
    next();
}