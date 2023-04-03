const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  gender: {
    type:String,
    enum:['male', 'female','not-set'],
    default:'not-set',
  },
  birthday: String,
  phoneNumber: {
    type:Number,
    unique:true
  },
  IDcode: {
    type: Number,
    required: true,
    unique:true,
    minlength: 10,
    maxlength: 10,
  },
  city: String,
  company: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 40,
  },
  role: {
    type:String,
    enum:['employee','director'],
    default:'not-set'
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
