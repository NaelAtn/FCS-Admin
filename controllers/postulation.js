const Postulation = require("../model/Postulation");
const cloudinary = require("../middlewares/cloudinary")

exports.ajouterCandidature = async (req, res) => {
  try {

       
    res.status(200).send({ success : [{msg : 'Candidature envoyée'}] })
  } catch (error) {
    res.status(400).send({msg : 'Candidature non envoyée ... veuillez réessayer plus tard', error})   
  }
};
