const pagosContainer = document.getElementById('pagos-1');
const pagosContainer2 = document.getElementById('pagos-2');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const verificar=await axios.get('/api/users/verificar')
    if(verificar.data.validate==false){
      window.location.href='/login/'
    }
    console.log(verificar);
  } catch (error) {
    console.log(error)
  }
  
  
  try {
    const pendientes = await axios.get('/api/pagos/mostrarIdUser');
    console.log(pendientes);
  
    pendientes.data.forEach((element) => {
      const productos = element.productos;
      console.log(element.productos);
      productos.forEach((producto) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${producto.producto.nombre}</td>
          <td>${producto.producto.cantidad} pares</td>
          <td>${element.totalAmount}$</td>
        `;
        pagosContainer.appendChild(tr);
      });
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const acedptados= await axios.get('/api/pagos/mostrarIdUserAceptado')
    console.log(acedptados);
    acedptados.data.forEach((element) => {
      const productos = element.productos;

      productos.forEach((producto) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${producto.producto.nombre}</td>
          <td>${producto.producto.cantidad}</td>
          <td>${element.totalAmount}$</td>
        `;
        pagosContainer2.appendChild(tr);
      });
    });
  } catch (error) {
    console.log(error);
  }

})
  
