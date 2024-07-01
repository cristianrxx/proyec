
const pagosContainer = document.getElementById('pagos-container');


  document.addEventListener('DOMContentLoaded',async()=>{
    try {
      const mostrarPendiente= await axios.get('/api/pagos/mostrar')
      //console.log(mostrarPendiente);
      mostrarPendiente.data.forEach(element => {
        let tr=document.createElement('tr')
        let productos=element.pagos.productos
        for(i in productos){
          let productoItem=productos[i]
          tr.innerHTML=`
          <!-- Contenido del modal -->
          <div id="default-modal" tabindex="-1" class="hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-50 overflow-y-auto overflow-x-hidden">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <h2 class="text-lg text-center font-bold">Datos de la compra:</h2>
              <!-- Modal body -->
              <div class="p-4 md:p-5 space-y-4">
                
                
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Modelo de zapatos: ${productoItem.nombre}
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Cantidad: ${productoItem.cantidad}
                    </p>
                  
             
              </div>               
               <p class="ml-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Monto total: ${element.pagos.totalAmount}
                    </p>
              <!-- Modal footer -->
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button id="hide" data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Cerrar ventana
            </button>
              </div>
            </div>
          </div>
    
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
            `


        }
       
        
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
      const aceptar= await axios.post('/api/pagos/aceptar',{
        id:_id
      })
      console.log(aceptar);
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

  } catch (error) {
    console.log(error);
  }
}



