//1 hacer el router
//router: POST, GET, DELETE, UPDATE
const dotenv=require('dotenv')
const userRouter = require('express').Router();
const user = require('../models/usuario');
const zapato = require('../models/shoes');
const jwt=require('jsonwebtoken')
const cookie = require('cookie')
//registrar informacion del usuario que viene del formulario

userRouter.post('/', async  (request, response)=>{
    const {name, email, password,passwordval,rol} = request.body;
    //console.log(request.body)
    
    if(!name || !email || !password || !passwordval){
        return response.status(400).json({error:'Todos los campos son obligatorios'})//bad request
    }else{

        const  usuario = new user();


        usuario.nombre = name;
        usuario.email = email;
        usuario.password = password;
        usuario.rol=0;

        async function guardarUsuario(){
            await usuario.save();
            const usuarios = await user.find()
        }
        guardarUsuario().catch(console.error)

        response.status(200).json({mensaje:'Se ha creado el usuario'})
    }

    
})

userRouter.get("/verificar", async(req, res) => {
  const cookiesTrue = req.headers.cookie
  if(!cookiesTrue){
    res.json({message:'No existe una sesion activa'})
    return // <--- Add this l 
  }
  else{
    
 
  try {
  const cookies = req.headers.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
  const token = tokenCookie && tokenCookie.trim().split('=')[1];
  const decoded = jwt.verify(token, process.env.CLAVE);
  console.log(decoded);
  console.log(decoded.exp , Date.now());
    

    // Autenticado correctamente, proceder con la solicitud
    res.status(200).json({ message: 'TOKEN ACTIVO' ,validate:true});
  } catch (err) {
    if(err.name=='TokenExpiredError'){
      res.json({message:'Su sexion ha expirado, por favor, inicie sesion',validate:false})
      // const updatedUser = await user.findOneAndUpdate({ email: email }, { $set: { verificar: false } }, { new: true });

    }else{
      console.log(err);
    }
  }
  }

  
  //...
});

userRouter.get("/login", async (req, res) => {
  console.log('working login');
  const { email, password } = req.query
  console.log(email,password);
  try {
    const consulta = await user.findOne({
      email: email,
      password: password
      // rol: rol, // Add rol filter
    })

    if(consulta == null){
      res.status(200).json({message:'La contraseña o el correo no son correctos',validate:true})
    } else {
      // Genera un token JWT
      const usuarioToken = {
        nombre: consulta.usuario,
        userId: consulta._id,
        email: consulta.email,
        rol: consulta.rol
      };  
      console.log(consulta.email);

      try {
        
      } catch (error) {
        console.error(error); // Verificar que no haya errores de escritura
      }
      const token = jwt.sign(usuarioToken, process.env.CLAVE, { expiresIn: '3h'});

      // Establecer la cookie antes de enviar la respuesta
      res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 3600 * 1000 });
      // Enviar la respuesta
      res.status(200).json({ message: 'Login exitoso' ,rol:consulta.rol,validate:false});
    }

    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al consultar usuario",validate:true,
    });
  }
});





module.exports = userRouter

