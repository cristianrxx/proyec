
const urlParams = new URLSearchParams(window.location.search);

const shoeParam = urlParams.get('shoe');
const shoe = JSON.parse(decodeURIComponent(shoeParam));

const productName = document.getElementById('product-name');
const productImage = document.getElementById('product-image');
const productPrice = document.getElementById('product-price');
const productColor = document.getElementById('colors');
const productSize = document.getElementById('talla');
const productQuantity = document.getElementById('input-cantidad');

  document.getElementById('product-name').textContent = ` ${shoe.nombre} `;
  document.getElementById('product-category').textContent = `Categoría: ${shoe.categoria}`;
  document.getElementById('product-image').src = shoe.imagen;
  document.getElementById('product-price').value = shoe.precio;
 document.getElementById('product-price').textContent = `Precio: ${shoe.precio}$`;




  function mostrarMensaje(mensaje){
    const menError = document.createElement('p');
    menError.innerText = mensaje;
    menError.classList.add('adtv')
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(menError)

    setTimeout(()=>{
        menError.remove()
    },3000)
}
 
  


const enviarProducto=document.querySelector('.btn-add-car')


enviarProducto.addEventListener('click',async(e) =>{

  console.log(productColor,productQuantity,productSize);
  
  e.preventDefault()
  
  if (!productName.textContent || !productImage.src || !productPrice.textContent || !productColor.value || !productSize.value || !productQuantity.value) {
    alert('Por favor, asegúrate de que todos los campos estén llenos antes de continuar.');
    return;
  } else {


    mostrarMensaje('Se ha agregado al carrito')
  }


 const producto={
  imagen:productImage.src,
  nombre:productName.textContent,
  precio:productPrice.value*productQuantity.value,
  color:productColor.value,
  talla:productSize.value,
  cantidad:parseInt(productQuantity.value)
 }

try {
    const carrito=await axios.post('/api/users/carrito',{producto})

    
  console.log(carrito);
} catch (error) {
  console.log(error);  
}
})


document.addEventListener('DOMContentLoaded',async ()=>{
  try {
    const verificar=await axios.get('/api/users/verificar')
    if(verificar.data.validate==false){
      window.location.href='/login/'
    }
    console.log(verificar);
  } catch (error) {
    console.log(error)
  }
  
})