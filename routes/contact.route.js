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

router.route("/send-email/").post(async (req, res) => {
  try {
    // Form validation
    const { errors, isValid } = validateContactInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      const message = await messageModel.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });
      return message;
    }
  } catch (err) {
    throw new Error(err);
  }
});

router.route("/get-messages/").get(async (req, res) => {
  try {
    const messages = await messageModel.find({});
    res.json({ messages: messages });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
