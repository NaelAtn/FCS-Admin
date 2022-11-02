const express = require("express");
const { subNewsLetter, getNewsLetters, deleteNewsLetters } = require("../controllers/newsletter");
const { newsLetterValidator, validation } = require("../middlewares/Validatior");

const router = express.Router();

router.post("/addNewsLetter" , newsLetterValidator(), validation, subNewsLetter)

router.get("/list-newsletter" , getNewsLetters)

router.delete("/:_id" , deleteNewsLetters) 

module.exports = router;