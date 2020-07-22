const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    console.log("Name is required")
    errors.name = "Name is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    console.log("Email address is required")
    errors.email = "Email address is required";
  }

  // Message Information checks
  if (Validator.isEmpty(data.message)) {
    console.log("Message is required")
    errors.message = "Message is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};