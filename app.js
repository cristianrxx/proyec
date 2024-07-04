require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path=require('path');
const userRouter = require('./controllers/index');
const zapatoRouter = require('./controllers/shoes');
const pagosRouter = require('./controllers/pagos');
//CONEXIONA BD


try {
    mongoose.connect(process.env.MONGO_TOKEN)
    console.log('TE HAS CONECTADO LA BD');
}
catch (error) {
    console.log(error);
}


//RUTAS FRONTEND

app.use('/',express.static(path.resolve('views','home')))
app.use('/css',express.static(path.resolve('views','css'))) 
app.use('/registro',express.static(path.resolve('views','registro'))) 
app.use('/login',express.static(path.resolve('views','login')));
app.use('/components',express.static(path.resolve('views','components')));
app.use('/img',express.static(path.resolve('views','img')));
app.use('/controllers',express.static(path.resolve('controllers')));

//Rutas de frontend-ADMINISTRADOR
app.use('/administrador-principal',express.static(path.resolve('views/administrador/admin')));
app.use('/administrador-historial',express.static(path.resolve('views/administrador/historial')));
app.use('/administrador-pagos',express.static(path.resolve('views/administrador/pagosAdmin')));


//Rutas de frontend-CLIENTE
app.use('/productos',express.static(path.resolve('views/cliente/productos')));
app.use('/seleccionar',express.static(path.resolve('views/cliente/seleccionar')));
app.use('/historial',express.static(path.resolve('views/cliente/historial')));
app.use('/carrito',express.static(path.resolve('views/cliente/carrito')));

app.use(express.json())

//RUTAS DE BACKEND
app.use('/api/users', userRouter)
app.use('/api/shoes', zapatoRouter)
app.use('/api/pagos', pagosRouter)


module.exports=app




