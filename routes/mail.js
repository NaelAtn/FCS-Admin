const express = require("express");
const nodemailer = require("nodemailer");
const { mailValidator, validation } = require("../middlewares/Validatior");
const router = express.Router();

router.post("/send-mail",mailValidator(), validation,async (req, res, next) => {

    try {
      const { name, email, message, phone } = req.body;
      let content = `Nom et Prénom: ${name} \n e-mail: ${email} \n Numéro: ${phone} \n Message: ${message} `;
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "fcs.lavage22@gmail.com",
          pass: "qmtwxojtafnmviyf",
        },
      });
      let mailOptions = {
        from: "fcs.lavage22@gmail.com",
        to: "fcs.lavage22@gmail.com",
        subject: "New Message from Contact Form",
        text: content,
      };
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .send({
          success: [
            {
              msg: "Message envoyé...Un de nos conseillers vous contactera au plus vite.",
            },
          ],
        });
    } catch (error) {
      res.status(400).send({ msg: "Message non envoyé", error });
    }
  }
);

module.exports = router;
