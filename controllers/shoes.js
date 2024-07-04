
const zapatoRouter = require('express').Router();
const zapato = require('../models/shoes');
const multer = require('multer');
const path = require('path');
const user = require('../models/usuario');
const jwt=require('jsonwebtoken');
const userRouter = require('.');


zapatoRouter.post('/carrito', async (req, res) => {
  const { nombre } = req.body;

  const cookies = req.headers.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
  const token = tokenCookie && tokenCookie.trim().split('=')[1];
  const decoded = jwt.verify(token, process.env.CLAVE);

  const usuario = await user.findOne({ _id: decoded.userId });

  let objetoKeys = usuario.carrito.filter(obj => obj.tipo === 'objeto').map(obj => obj.nombre);
  let newObjectName;

  if (objetoKeys.length === 0) {
    newObjectName = 'objeto1';
  } else {
    const lastObjectName = objetoKeys[objetoKeys.length - 1];
    const objetoNumber = parseInt(lastObjectName.replace('objeto', ''));
    newObjectName = `objeto${objetoNumber + 1}`;
  }

  usuario.carrito.push({ nombre, tipo: 'objeto' });

  await usuario.save();

  console.log(usuario.carrito);
  res.json(usuario);
});



zapatoRouter.post('/postVarios', async (request, response) =>{
    
    let shoesObject = []
    request.body.zapatos.forEach(async ({ nombre, precio, categoria, imagen }) => {
        
        if(!nombre || !precio || !categoria || !imagen){
            return response.status(400).json({error:'Todos los campos son obligatorios'})//bad request
        }else{
    
            const shoes = new zapato();
            
            
            shoes.nombre = nombre;
            shoes.precio = precio;
            shoes.categoria = categoria;
            shoes.imagen = imagen;
    
    
            try{
                await shoes.save();
                shoesObject.push(shoes)
               
            }
            catch(error){
                console.log(error);
            }
        }
    });

    response.json(shoesObject)
   
})


const storage = multer.diskStorage({
    destination: path.join(__dirname.replace('controllers', "\\views"), 'img'),
    filename: function(req, file, cb) {
      const imageName = Date.now() + path.extname(file.originalname);
      cb(null, imageName);
    }
  });
  console.log(__dirname)
  const upload = multer({ storage: storage, limits: { fileSize: 3000000 } });

  



  // Set up route to handle image upload
  zapatoRouter.post('/upload-image', upload.single('file'), async (req, res) => {
  //   console.log(req.file); // Should log the uploaded file
  // console.log(req.body); // Should log the zapatoId
  //   console.log(req.file)
    if (!req.file) {
      console.log('No file uploaded');
      return res.status(400).send({ message: 'No file uploaded' });
    }

    const shoes = await zapato.findByIdAndUpdate(req.body.zapatoId, {
        imagen: '/img/' + req.file.filename
    })
    
    // console.log(shoes)
    res.status(200).json(shoes);
  });

  zapatoRouter.get('/all', async (req, res) =>{

    try{
    const shoes = await zapato.find();
    res.status(200).json(shoes)

    }catch(error){
        console.log(error);
        /* res.status(500).json({
          message: "Error al consultar zapato",
        }); */
    }
    
  })

 zapatoRouter.get('/eliminar', async(req, res) => {
    const id = req.query
    console.log();
    // Buscar el zapato en la base de datos por ID
    try {
      const deleteShoe= await zapato.findByIdAndDelete(id.id)
      res.status(200).json({message:'Eliminado con exito'})
    } catch (error) {
      console.log(error);
    }
  });




module.exports = zapatoRouter


