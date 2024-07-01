const pagosRouter = require('express').Router();
const pago=require('../models/pagos')



pagosRouter.post('/consultar', async (req, res) => {
    const { productos, cdi, tlf, banco,  cardNumber, totalAmount,idUser} = req.body;
    const pagoU = new pago({
        //name:nameProducto,
        userId:idUser, 
        cdi:cdi,
        tlf:tlf,
        banco:banco,
        estado:'pendiente',
        cardNumber:cardNumber,
        productos:productos,
        totalAmount:totalAmount,
      });

      try {
        await pagoU.save();
        res.json({ message: 'Pago procesado con éxito' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar el pago' });
      }
    console.log('WORKING');
})

pagosRouter.get('/mostrar', async (req, res) =>{
  let pagosPendientes=[]
  try {
    const pagoU = await pago.find();

    for (item in pagoU){
      let i=pagoU[item]
      if(i.estado=='pendiente'){
        let data={
          pagos:i
          }
          pagosPendientes.push(data)
      }
       
    }
    res.status(200).json(pagosPendientes)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al mostrar los pagos' });
      }
})

pagosRouter.get('/aceptados', async (req, res) => {
  let pagosAceptados = [];
  try {
    const pagoU = await pago.find();

    for (item in pagoU) {
      let i = pagoU[item];
      if (i.estado === 'aceptado') {
        let data = {
          pagos: i,
        };
        pagosAceptados.push(data);
      }
    }
    res.status(200).json(pagosAceptados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al mostrar los pagos' });
  }
});

pagosRouter.get('/mostrarId', async (req, res) =>{
try {
    
    const {userId} = req.query
    const pagoU = await pago.find({userId:userId,estado:'pendiente'});
    res.json(pagoU)
} catch (error) {
    console.error(error);
}
})

pagosRouter.post('/aceptar', async (req, res) =>{

  const {id} = req.body
  try {
    const pagoU = await pago.findOneAndUpdate({_id:id},{$set:{estado:'aceptado'}},{new:true});
    console.log(pagoU);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al mostrar los pagos' });
      }
  })

pagosRouter.post('/rechazar', async (req, res) => {
  const {id} = req.body
  try {
    const pagoU = await pago.findOneAndUpdate({_id:id},{$set:{estado:'rechazado'}},{new:true});
    console.log(pagoU);
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al mostrar los pagos' });
      }
});

    pagosRouter.get('/aceptadosID', async (req, res) => {
      let pagosAceptados = [];
      try {
        const {userId} = req.query
        const pagoU = await pago.find({userId:userId,estado:'aceptado'});
        res.json(pagoU)

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al mostrar los pagos' });
      }
    });

module.exports=pagosRouter
