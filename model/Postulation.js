const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const PostulationSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  adresse: {
    type: String,
    require: true,
  },
  phone: { 
    type: Number,
     require: true },
  age : {
    type : Number ,
    require : true 
  } ,
  cv: { type : String,
    } ,
  }
 ,
 {timestamps : true});

module.exports = Postulation = model("postulation", PostulationSchema);
