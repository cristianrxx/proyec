const mongoose = require('mongoose');

const paymentHistorySchema = new mongoose.Schema({
  userId: String,
  cdi: Number,
  tlf: Number,
  banco: String,
  cardNumber:Number,
  estado:String,
  totalAmount:Number,
  productos:Object
});

const pago = mongoose.model('pagos', paymentHistorySchema);

module.exports = pago;