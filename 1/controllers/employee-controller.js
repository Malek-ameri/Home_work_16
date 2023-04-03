const Employee = require("../models/employee-model");

const createUser = (req, res) => {
  const {
    firstName,
    lastName,
    gender = "not-set",
    birthday,
    phoneNumber,
    IDcode,
    city = "not-set",
    company,
    role = "employee",
  } = req.body;

  const newEmployee = new Employee({
    firstName,
    lastName,
    gender,
    birthday,
    phoneNumber,
    IDcode,
    city,
    company,
    role,
  });

  newEmployee
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));

  ;
};

module.exports = { createUser };
