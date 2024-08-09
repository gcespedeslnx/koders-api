// El esquema de mentores debe de tener los siguientes atributos:
//    firstName (String)
//    lastName (String)
//    email (String)
//    age (Number)

const mongoose = require("mongoose");

const mentorKodemia = new mongoose.Schema({
firstName:{
    type: String,
    required: true,
    minlegnth: 2,
    maxlegnth: 50,
},
lastName:{
    type: String,
    required: true,
    minlegnth: 2,
    maxlegnth: 50,
},
email:{
    type:String,
    required: true,
    match:RegExp(".*@.*..*"),
},
age:{
    type:Number,
    required: true,
    min:18,
    max:100,

   },
});
// se exporta el modelo para que pueda ser reutilizado

module.exports = mongoose.model("Mentor",mentorKodemia);


