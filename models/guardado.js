const mongoose = require('mongoose')


const userSchemaGuardado = new mongoose.Schema({
    nombre:String,
    precio:Number,
    talla:Number,
    color:String,
    cantidad:Number,
})

//registrando el modelo
const zapato = mongoose.model('zapato',userSchemaZapato)

module.exports = zapato