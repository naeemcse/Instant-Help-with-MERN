const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
          name:String,
          mobile:Number,
          email:String,
          facebookId:String,
          dateOfBirth:Date,
          selectedGender:String,
          divisionName:String,
          zillaName:String,
          upZillaName:String,
          profession:String,
          experienceDate:Date,
          details:String,
          password:String,
          reEnterPassword:String
})

const PersonModel = mongoose.model("personData",RegistrationSchema);
module.exports = PersonModel