
const productos = JSON.parse(localStorage.getItem('productos'));
let montoTotal=0
let infoProductos = [];

if (productos) {
  const productList = document.getElementById('product-list');
  productos.forEach((producto) => {
    montoTotal=montoTotal+producto.precio
    const productItem = document.createElement('td');
    productItem.innerHTML = `
    <th>
    <p>${producto.nombre}</h2>
    </th>

    <th>
    <img src="${producto.imagen}" alt="">
    </th>

    <th>
    <p> Cantidad: ${producto.cantidad}</p>
    </th>

    <th>
    <p>${producto.precio}</p>
    </th>

    <th>
    <p>Talla: ${producto.talla}</p>
    </th>

    <th>
    <p>Color: ${producto.color}</p>
    </th>
    <button class="remove-product">Eliminar</button>
    `;
    productList.appendChild(productItem);


    const infoProducto = {
      nombre: producto.nombre,
      cantidad: producto.cantidad
    };

    infoProductos.push(infoProducto);

    // Add event listener to the 'remove-product' class
    const removeButton = productItem.querySelector('.remove-product');
    removeButton.addEventListener('click', (event) => {

      const productToDeleteIndex = productos.findIndex(item => item === producto); // Find index efficiently

      // Confirm deletion before removing (optional)
      if (confirm(`¿Estás seguro de eliminar el producto "${producto.nombre}"?`)) {
        productos.splice(productToDeleteIndex, 1); // Remove product from array
        localStorage.setItem('productos', JSON.stringify(productos)); // Update localStorage
        productItem.remove(); // Remove product element from DOM
      }
    });
  });
}

console.log(infoProductos);


const pagarBtn = document.getElementById('pagar-btn');
const paymentForm = document.getElementById('payment-form');

pagarBtn.addEventListener('click', () => {
  paymentForm.classList.remove('hidden');
  console.log(montoTotal);

});    

const formPago = document.getElementById('form-datos');

formPago.innerHTML = 
`<label for="">C.D.I:</label>
<input type="text" id="cdi" name="cdi"><br><br>
<label for="">Numero de telefono:</label>
<input type="text" id="tlf" name="tlf"><br><br>
<label for="">Banco:</label>
<select name="banco" id="banco"
class="w-52">
  <option disabled selected value="">
   Seleccione su banco
  </option>
  <option value="0102">BANCO DE VENEZUELA</option>
  <option value="0156">100% BANCO</option>
  <option value="0172">BANCAMIGA BANCO MICROFINANCIERO C A</option>
  <option value="0114">BANCARIBE</option>
  <option value="0171">BANCO ACTIVO</option>
  <option value="0166">BANCO AGRICOLA DE VENEZUELA</option>
  <option value="0175">BANCO BICENTENARIO DEL PUEBLO</option>
  <option value="0128">BANCO CARONI</option>
  <option value="0163">BANCO DEL TESORO</option>
  <option value="0115">BANCO EXTERIOR</option>
  <option value="0151">BANCO FONDO COMUN</option>
  <option value="0173">BANCO INTERNACIONAL DE DESARROLLO</option>
  <option value="0105">BANCO MERCANTIL</option>
  <option value="0191">BANCO NACIONAL DE CREDITO</option>
  <option value="0138">BANCO PLAZA</option>
  <option value="0137">BANCO SOFITASA</option>
  <option value="0104">BANCO VENEZOLANO DE CREDITO</option>
  <option value="0134">BANESCO</option>
  <option value="0177">BANFANB</option>
  <option value="0146">BANGENTE</option>
  <option value="0174">BANPLUS</option>
  <option value="0108">BBVA PROVINCIAL</option>
  <option value="0157">DELSUR BANCO UNIVERSAL</option>
  <option value="0178">N58 BANCO DIGITAL BANCO MICROFINANCIERO S A</option>
</select><br><br>
<label for="card-number">Numero de referencia(ultimos 8 digitos):</label>
<input type="number" id="card-number" name="card-number"><br><br>
<label for="total-amount">Total a pagar: <span id="total-amount" class='mostrarPago'>${montoTotal}$</span></label><br><br>
<button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Realizar pago</button>
`
const botonPago = formPago.querySelector('button[type="submit"]');

botonPago.addEventListener('click', async (e) => {
  e.preventDefault(); 
  const cdi = document.getElementById('cdi').value;
  const tlf = document.getElementById('tlf').value;
  const banco = document.getElementById('banco');
  const cardNumber = document.getElementById('card-number').value;
  const totalAmount = document.getElementById('total-amount').textContent.replace('$', '');
  const token = localStorage.getItem('token'); 

 if (!cdi || !tlf || !banco || !cardNumber || !totalAmount) {
   alert('Por favor, asegúrate de que todos los campos estén llenos antes de continuar.');
   return;
 }
  let productos=localStorage.getItem('productos')
 console.log(productos);


 try {
  const validatetoken= await axios.get('/api/users/verificar')

  try {
    const pago= await axios.post('/api/pagos/consultar',{
      
      idUser:validatetoken.data.id,
      cdi:cdi,
      tlf:tlf,
      banco:banco.value,
      cardNumber:cardNumber,
      totalAmount:totalAmount,
      productos:infoProductos
    })
    //console.log(pago);

    localStorage.removeItem(productos)
  } catch (error) {
    console.log(error);
  }

  console.log(validatetoken);

  if(validatetoken.data.validateToken==false){
    localStorage.removeItem('token')
    alert('expiro')
    window.location.href='/login/'
  }

} catch (error) {
  console.log(error);
}



});

