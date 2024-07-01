const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    nombre:String,
    email:String,
    password:String,
    carrito:Object,
    verificar:{
        type:Boolean,
        default:false
    },
    rol:{
        type:Number,
        default:0
    }
})

//configurar la respuesta del modelo
userSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

//registrando el modelo
const user = mongoose.model('user',userSchema)

module.exports = user