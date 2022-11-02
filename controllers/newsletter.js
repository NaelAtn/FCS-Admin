const NewsLetter = require("../model/NewsLetter")

exports.subNewsLetter= async(req,res)=> {
    try {
        const {email } = req.body
        const foundMail = await NewsLetter.findOne({ email });
        if (foundMail) {
            return res.status(400).send({ errors: [{ msg: "E-mail déja utilisé" }]});
        }
        const newNewsLetter = new NewsLetter({...req.body })
        await newNewsLetter.save()
        res.status(200).send({success : [{msg:"Merci pour votre inscription"}] , newNewsLetter })
    } catch (error) {
        res.status(400).send({msg : 'veuillez réessayer plus tard', error})    
    }
}



exports.getNewsLetters = async (req,res) => {
    try {
        const listNewsLetters = await NewsLetter.find();
        res.status(200).send({msg : 'list NewsLetters',  listNewsLetters})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all listNewsLetters', error})
    }
  }


  exports.deleteNewsLetters = async (req,res) => {
    try {
        const{_id}= req.params;
        await NewsLetter.findOneAndDelete({_id})
        res.status(200).send({msg : "E-mail deleted"})
    } catch (error) {
        res.status(400).send({msg : "cannot delete this E-mail", error})      
    }
}     

