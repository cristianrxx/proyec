
const pagosTable = document.getElementById('pagos-aceptados');


document.addEventListener('DOMContentLoaded',async()=> {
  try {
    const response = await axios.get('/api/pagos/aceptados');
    response.data.forEach(element => {
      let tr=document.createElement('tr')
      /*let productos=element.pagos.productos
      console.log(productos);*/
      tr.innerHTML = `
      <td class='text-center'>${element.pagos.cdi}</td>
      <td class='text-center'>${element.pagos.tlf}</td>
      <td class='text-center'>${element.pagos.banco}</td>
      <td class='text-center'>${element.pagos.cardNumber}</td>
      `
    pagosTable.appendChild(tr)
  })
  } catch (error) {
    console.error(error);
  }
})

