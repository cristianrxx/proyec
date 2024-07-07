
const productsContainer = document.getElementById('products-container');

document.addEventListener('DOMContentLoaded', async () => {
  let getShoeId
  fetch('/api/shoes/all')
    .then(response => response.json())
    .then(jsonData => {
      const shoes = jsonData;

      const generateProductPage = (shoe) => {
        const productHTML = ` 
          <div class="product">
          <th><h2>${shoe.nombre}</h2></th>
          <th><p>${shoe.categoria}</p></th>
          <th><p>${shoe.precio}</p></th>
          <th><img src="${shoe.imagen}""></th>
          <td class='eliminar' data-id='${shoe._id}'>Eliminar</td>
          </div>
        `;
        return productHTML;
      };

      shoes.forEach(shoe => {
        const productPageHTML = generateProductPage(shoe);
        productsContainer.innerHTML += productPageHTML;
      });

      // Ahora que se ha renderizado el contenido del DOM, podemos iterar sobre los elementos con clase eliminar
      const eliminarBtns = document.getElementsByClassName('eliminar');
      for (let i = 0; i < eliminarBtns.length; i++) {
        let btn = eliminarBtns[i];
        btn.addEventListener('click', async function() {

          const id = btn.dataset.id; // Nota el uso de dataset
            console.log(id);

            try {
              const eliminarItem= await axios.get('/api/shoes/eliminar',{
                params:{
                  id:id
                }
                
              })
              console.log(eliminarItem);
              location.reload(); // Recargar la página

            } catch (error) {
              console.log(error);
            }
           
          });
      }
    })
    .catch(error => console.error('Error loading JSON data:', error));

    
});

const eliminarBtns = document.getElementsByClassName('eliminar');

for (let i = 0; i < eliminarBtns.length; i++) {
  let btn = eliminarBtns[i];
  btn.addEventListener('click', function() {
    const id = btn.dataset.id; // Nota el uso de dataset
    console.log(id);
  });
}

  //formulario

const botonDesplegar = document.getElementById('boton-desplegar');
const formulario = document.getElementById('formulario');

botonDesplegar.addEventListener('click', () => {
  formulario.classList.toggle('escondido');
  formulario.classList.toggle('visible'); 


});



const formularioprueba=document.querySelector('.prueba')

const agregarZapato = async () =>{
  

  const nombre = document.getElementById('nombre-producto');
  const categoria = document.getElementById('categoria');
  const precio = document.getElementById('precio');

  try{

    if(!nombre || !precio || !categoria){
      throw new Error('Todos los campos son obligatorios')
    }

    const objtShoe={
      nombre:nombre.value,
      precio:precio.value,
      categoria:categoria.value,
    }  
    
    const res =await axios.post('/api/shoes/post',objtShoe)

    console.log(res)
    if(res.data){
      const formData = new FormData()
      const imagen = document.getElementById('imagen').files[0]
      console.log(imagen)
      console.log(res.data._id)

      formData.append('file', imagen, imagen.name)
      formData.append('zapatoId', res.data._id)


      fetch('/api/shoes/upload-image', {
        method: 'POST',
        body: formData,
      })
      /* axios.post('/api/shoes/upload-image', formData, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
        .then((response) => {
          //handle success
        }).catch((error) => {
          //handle error
        });*/
    } 
    
  }
  catch(error){
    alert(error.message);
  }
}

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

  
