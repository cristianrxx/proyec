

const productsContainer = document.getElementById('products-container');

   fetch('/api/shoes/all')
  .then(response => response.json())
  .then(jsonData => {
    const shoes = jsonData;

    const generateProductPage = (shoe) => {
      const productHTML = ` 
      <a href="/producto/?shoe=${encodeURIComponent(JSON.stringify(shoe))}">
        <div class="product">
          <img src="${shoe.imagen}" alt="${shoe.nombre}">
           <h2>${shoe.nombre}</h2>
           <p>Categoría: ${shoe.categoria}</p>
           <p>Precio: <span>${shoe.precio}$</span></p>
        </div>
      </a>
      `;
      return productHTML;
    };

    shoes.forEach(shoe => {
      const productPageHTML = generateProductPage(shoe);
      productsContainer.innerHTML += productPageHTML;
    });
  })
  .catch(error => console.error('Error loading JSON data:', error));


  