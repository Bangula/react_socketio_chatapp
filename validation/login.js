const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required field.";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required field";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters.";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
