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
app.use('/admin',express.static(path.resolve('views','admin')));
app.use('/funcion',express.static(path.resolve('views','funcion')));
app.use('/producto',express.static(path.resolve('views','producto')));
app.use('/carrito',express.static(path.resolve('views','carrito')));
app.use('/historial',express.static(path.resolve('views', 'historial')));
app.use('/pagosAdmin',express.static(path.resolve('views', 'pagosAdmin')));
app.use('/dashboard',express.static(path.resolve('views', 'dashboard')));
app.use('/routes',express.static(path.resolve('routes')));

app.use(express.json())

//RUTAS DE BACKEND
app.use('/api/users', userRouter)
app.use('/api/shoes', zapatoRouter)
app.use('/api/pagos', pagosRouter)


module.exports=app




