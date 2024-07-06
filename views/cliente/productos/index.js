const productsContainer = document.getElementById('products-container');
const categorySelect = document.querySelector('.point2');
const priceSelect = document.querySelector('.point');

fetch('/api/shoes/all')
  .then(response => response.json())
  .then(jsonData => {
    const shoes = jsonData;

    const generateProductPage = (shoe) => {
      const productHTML = ` 
      <a href="/seleccionar/?shoe=${encodeURIComponent(JSON.stringify(shoe))}">
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

    // agregar listener para filtrar por categoría
    categorySelect.addEventListener('change', (e) => {
      const selectedCategory = e.target.value;
      const filteredShoes = shoes.filter(shoe => shoe.categoria === selectedCategory);
      productsContainer.innerHTML = '';
      filteredShoes.forEach(shoe => {
        const productPageHTML = generateProductPage(shoe);
        productsContainer.innerHTML += productPageHTML;
      });
    });

    shoes.forEach(shoe => {
      const productPageHTML = generateProductPage(shoe);
      productsContainer.innerHTML += productPageHTML;
    });

    // agregar listener para filtrar por precio
    priceSelect.addEventListener('change', (e) => {
      const selectedPriceRange = e.target.value;
      const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number); // extrae el rango de precios del valor seleccionado
      const filteredShoes = shoes.filter(shoe => shoe.precio >= minPrice && shoe.precio <= maxPrice);
      productsContainer.innerHTML = '';
      filteredShoes.forEach(shoe => {
        const productPageHTML = generateProductPage(shoe);
        productsContainer.innerHTML += productPageHTML;
      });
    });
  })
  .catch(error => console.error('Error loading JSON data:', error));

  document.addEventListener('DOMContentLoaded',async ()=>{
    try {
      const verificar=await axios.get('/api/users/verificar')
      if(verificar.data.validate==false){
        window.location.href='/login/'
      }

    } catch (error) {
      console.log(error)
    }
    
  })
   
