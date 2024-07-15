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
    res.json({message:'No existe una sesion activa',validate:false})
    return // <--- Add this l 
  }
  else{
    
 
  try {
  const cookies = req.headers.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
  const token = tokenCookie && tokenCookie.trim().split('=')[1];
  const decoded = jwt.verify(token, process.env.CLAVE);

    


    res.status(200).json({ message: 'TOKEN ACTIVO' ,validate:true});
  } catch (err) {
    if(err.name=='TokenExpiredError'){
      res.json({message:'Su sexion ha expirado, por favor, inicie sesion',validate:false})
   

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

userRouter.post("/carrito", async (req, res) => {
  try {
    const cookies = req.headers.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie && tokenCookie.trim().split('=')[1];
    const decoded = jwt.verify(token, process.env.CLAVE);

    if (!decoded) {
      return res.status(401).json({ message: "Token inválido" });
    }

    const usuario = await user.findOne({ _id: decoded.userId });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const { producto } = req.body; // assuming the product to be added is in the request body

    if (!producto) {
      return res.status(400).json({ message: "Producto no proporcionado" });
    }

    if (!usuario.carrito || typeof usuario.carrito!== 'object') {
      usuario.carrito = {};
    }

    const existingProducto = Object.values(usuario.carrito).find(p => p.nombre === producto.nombre);

    if (existingProducto) {
      // Si el producto ya existe, sumar la cantidad
      existingProducto.cantidad = parseInt(existingProducto.cantidad) + parseInt(producto.cantidad);
      existingProducto.precio = parseInt(existingProducto.cantidad) *parseInt(producto.precio);

    } else {
      // Si el producto no existe, agregarlo al carrito
      let newProductoKey;
      if (Object.keys(usuario.carrito).length === 0) {
        newProductoKey = 'producto1';
      } else {
        const lastProductoKey = Object.keys(usuario.carrito).sort().pop();
        const lastNumber = parseInt(lastProductoKey.replace('producto', ''));
        newProductoKey = `producto${lastNumber + 1}`;
      }
      usuario.carrito[newProductoKey] = producto;
    }

    await user.updateOne({ _id: decoded.userId }, { $set: { carrito: usuario.carrito } });

    console.log(usuario.carrito); // Verificar que el producto esté siendo agregado correctamente

    res.json({ message: "Producto agregado al carrito" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agregar producto al carrito" });
  }
}); 

userRouter.get("/carritoId", async (req, res) => {
  try {
    const cookies = req.headers.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie && tokenCookie.trim().split('=')[1];
    const decoded = jwt.verify(token, process.env.CLAVE);

    let productos=[]
    let montoTotal=0
    const usuario = await user.findOne({ _id: decoded.userId });

   
    Object.values(usuario.carrito).forEach(element=>{
      console.log(element.precio);
       montoTotal=montoTotal+element.precio
      console.log(element);
      let product={
        producto:element
      }
      productos.push(product)
    })
    
    res.json({mostrar:productos,total:montoTotal})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agregar producto al carrito" });
  }
}); 

userRouter.post("/vaciarCarrito", async (req, res) => {
  try {
    const cookies = req.headers.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie && tokenCookie.trim().split('=')[1];
    const decoded = jwt.verify(token, process.env.CLAVE);

    const usuario = await user.findOne({ _id: decoded.userId });
      // Si el producto no existe, agregarlo al carrito

      if (Object.keys(usuario.carrito).length === 0) {
        res.json({message:'El carrito ya se encuentra vacio'})
    }else{
      usuario.carrito={}
    }

    await user.updateOne({ _id: decoded.userId }, { $set: { carrito: usuario.carrito } });
    res.json({message:'El carrito se ha vaciado correctamente'})
    console.log(usuario.carrito); // Verificar que el producto esté siendo agregado correctamente

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al vaciar producto al carrito" });
  }
}); 

userRouter.post("/logout", async (req, res) => {
  try {
    // Clear the cookie
    res.clearCookie("token");

    // Return a response indicating that the user has been logged out
    res.status(200).json({ message: "Sesión cerrada exitosamente" ,validate:false});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al cerrar sesión" ,validate:true});
  }
});

module.exports = userRouter

