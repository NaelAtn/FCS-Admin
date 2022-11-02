const express = require("express");
const { addReservation, getReservations, deleteReservation } = require("../controllers/reservation");
const { reservationValidator, validation } = require("../middlewares/Validatior");


const router = express.Router();


router.post ("/post-reservation" , reservationValidator(), validation, addReservation )

router.get ("/get-reservation", getReservations)

router.delete ("/:_id" , deleteReservation)


module.exports = router;