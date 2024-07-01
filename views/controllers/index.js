//1 hacer el router
//router: POST, GET, DELETE, UPDATE
const userRouter = require('express').Router();

//registrar informacion del usuario que viene del formulario

userRouter.post('/',(request, response)=>{
    const {name, email, password} = request.body;
})

module.exports = userRouter