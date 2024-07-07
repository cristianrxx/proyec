
const pagosContainer = document.getElementById('pagos-container');


  document.addEventListener('DOMContentLoaded',async()=>{

    try {
      const pagosPendientes = await axios.get('/api/pagos/pagosPendientes')
      console.log(pagosPendientes);
      pagosPendientes.data.forEach((element) => {
        const productos=element.pagos.productos

        console.log(productos);
    
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
                     <button class="show">
                      Datos
                    </button>
                    </td>
                    <td>${element.pagos.cdi}</td>
                    <td>${element.pagos.tlf}</td>
                    <td>${element.pagos.banco}</td>
                    <td>${element.pagos.cardNumber}</td>
                    <td><button class="aceptar" onclick="aceptar('${element.pagos._id}')">Aceptar</button></td>
                    <td><button class="rechazar" onclick="rechazar('${element.pagos._id}')">Rechazar</button></td>
        `;
    
        const modal = document.createElement('div');
        modal.className = 'hidden';
        modal.innerHTML = `
        <!-- Contenido del modal -->
        <div class="fixed pt-4 pr-4 pl-4 top-0 right-0 left-0 lg:pt-12 lg:pl-16 lg:pr-16 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-50 overflow-y-auto overflow-x-hidden">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <h2 class="text-lg text-center font-bold">Datos de la compra:</h2>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              ${productos.map((producto) => `
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Modelo de zapatos: ${producto.producto.nombre}
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Cantidad: ${producto.producto.cantidad}
                </p>
              `).join('')}
              <p class="ml-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Monto total: ${element.pagos.totalAmount}
              </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Cerrar ventana
              </button>
            </div>
          </div>
        </div>
      `;
    
        document.body.appendChild(modal);
    
        const showButton = tr.querySelector('.show');
        const closeButton = modal.querySelector('button');
    
        showButton.addEventListener('click', () => {
          modal.classList.toggle('hidden');
        });
    
        closeButton.addEventListener('click', () => {
          modal.classList.toggle('hidden');
        });
       
        pagosContainer.appendChild(tr)
      });


      const show=document.querySelector('.show')

      show.addEventListener('click',()=>{
        const modal=document.querySelector('#default-modal')
        modal.classList.toggle('hidden')

      })

      const hide=document.querySelector('#hide') 
      hide.addEventListener('click',()=>{
        const modal=document.querySelector('#default-modal')
        modal.classList.toggle('hidden')
        })
    } catch (error) {
      console.log(error);
    }
  })
  async function aceptar(_id){
    try {
      const aceptar = await axios.post('/api/pagos/aceptar',{
        id:_id
      })
      console.log(aceptar);
      alert('Pago verificado con exito')
      window.location.reload(); // Add this line to refresh the page
    } catch (error) {
      console.log(error);
    }
  }
async function rechazar(_id) {
  try {
    const rechazar = await axios.post('/api/pagos/rechazar', {
      id: _id
    })
    console.log(rechazar);
    alert('Pago eliminado')
    window.location.reload();
  } catch (error) {
    console.log(error);
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


