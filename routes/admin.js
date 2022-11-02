const express = require("express");
const { loginAdmin } = require("../controllers/admin");
const isAuthAdmin = require("../middlewares/isAuThAdmin");
const { validation, loginValidator } = require("../middlewares/Validatior");

const router = express.Router();

router.post("/loginAdmin",loginValidator(), validation, loginAdmin);

router.get("/currentAdmin", isAuthAdmin, (req, res) => {
  res.send(req.admin);
});


module.exports = router;