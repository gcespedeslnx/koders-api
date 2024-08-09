const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength:2,
        maxLength:100,

    },
    lastName:{
        type: String,
        required:true,
        minLength:2,
        maxLength:100,
    },
    email:{
        type:String,
        required: true,
        match:RegExp(".*@.*..*"),
    },
});


// para el modelo necesitamos el nombre de la coleccion
module.exports = mongoose.model("kodes",koderSchema);
// usando nuestro modelo vamos a comunicarnos con nuestra base de datos
// - crear nnuevos documentos
// - buscar documentos

 
