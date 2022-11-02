const Reservation = require("../model/Reservation");

exports.addReservation = async (req, res) => {
  try {
    const { name, phone, service, time } = req.body;
    const newReservation = new Reservation({ ...req.body });
    await newReservation.save();
    res
      .status(200)
      .send({success: [
          {msg: "Merci pour votre réservation ...Un de nos conseillers vous contactera au plus vite.",newReservation}]});
  } catch (error) {
    res.status(400).send({ msg: "veuillez réessayer plus tard", error });
  }
};


exports.getReservations = async (req, res) =>{
    try {
        const listReservations = await Reservation.find();
        res.status(200).send({msg : 'list des résérvations',  listReservations})
    } catch (error) {
        res.status(400).send({ msg: "veuillez réessayer plus tard", error });
    }
}


exports.deleteReservation = async(req,res) => {
    try {
        const{_id}= req.params;
        await Reservation.findOneAndDelete({_id})
        res.status(200).send({msg : "Reservation supprimée"})
    } catch (error) {
        res.status(400).send({ msg: "veuillez réessayer plus tard", error }); 
    }
}