const pagosContainer = document.getElementById('pagos-1');
const pagosContainer2 = document.getElementById('pagos-2');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const id = await axios.get('/api/users/consultar-user', {
      params: {
        token: localStorage.getItem('token')
      }
    });

    const consultaId = await axios.get('/api/pagos/mostrarId', {
      params: {
        userId: id.data.id
      }
    });
console.log(consultaId);
    consultaId.data.forEach((element) => {
      const productos = element.productos;
      productos.forEach((producto) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>${element.totalAmount}$</td>
        `;
        pagosContainer.appendChild(tr);
      });
    });
  } catch (error) {
    console.log(error);
  }

  

  try {
    const id = await axios.get('/api/users/consultar-user', {
      params: {
        token: localStorage.getItem('token')
      }
    });

    const consultaId = await axios.get('/api/pagos/aceptadosID', {
      params: {
        userId: id.data.id
      }
    });
console.log(consultaId);
    consultaId.data.forEach((element) => {
      const productos = element.productos;
      productos.forEach((producto) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>${element.totalAmount}$</td>
        `;
        pagosContainer2.appendChild(tr);
      });
    });
  } catch (error) {
    console.log(error);
  }
  })
  
