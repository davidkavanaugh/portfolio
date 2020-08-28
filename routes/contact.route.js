const express = require("express");
const router = express.Router();
// const nodemailer = require("nodemailer");
// const SMTPConnection = require("nodemailer/lib/smtp-connection");
const validateContactInput = require("../validation/contact.validation");
const messageModel = require("../models/message.model");
// const config = require("../config");

// @route POST api/contact/send-email
// @desc Email David
// @access Public

router.post("/send-email", async (req, res) => {
  try {
    // Form validation
    const { errors, isValid } = validateContactInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      await messageModel.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });
      res.json({
        message: "Your message has been sent!",
        info,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});
// create reusable transporter object
// let transporter = nodemailer.createTransport({
//   host: config.EMAIL_HOST,
//   port: config.EMAIL_PORT,
//   secure: false, // true for 465, false for other ports,
//   auth: {
//     user: config.EMAIL_ADDRESS, // generated ethereal user
//     pass: config.EMAIL_PASSWORD, // generated ethereal password
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });
// send email with defined transport object
// const email = {
//   from: `${req.body.name} <${config.EMAIL_ADDRESS}>`,
//   to: config.EMAIL_ADDRESS, // list of receivers
//   subject: "PORTFOLIO", // Subject line
//   text: req.body.message, // plain text body
//   html: `<p>You have a new message from your portfolio site</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.name}</li>
//       <li>Email Address: ${req.body.email}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>`,
// };
// transporter.sendMail(email, (err, info) => {
//   if (err) {
//     res.json(err);
//     console.log(err);
//   } else {
//     res.json({
//       message: "Your message has been sent!",
//       info,
//     });
//     console.log(info);
//   }
// });

// @route GET api/contact/get-messages
// @desc get emails
// @access Private

router.get("/get-messages", async (req, res) => {
  try {
    const messages = await messageModel.find({});
    res.json({ messages: messages });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
