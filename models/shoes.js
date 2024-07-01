const mongoose = require('mongoose')


const userSchemaZapato = new mongoose.Schema({
    nombre:String,
    precio:Number,
    categoria:String,
    imagen:String
})

//registrando el modelo
const zapato = mongoose.model('zapato',userSchemaZapato)

module.exports = zapato