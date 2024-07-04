const navegacion = document.querySelector('#navegacion')
const footer = document.querySelector('#aqui')

const crearNavHome = ()=>{
  navegacion.innerHTML = ` 
  <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
<a href="/login/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Iniciar sesión</a>
  <a href="/registro/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Registrarse</a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">

      <a href="/login/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Iniciar sesión</a>

          <a href="/registro/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Registrarse</a>

      
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/login/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/login/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
  
<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
</div>
     
`
}

const crearNavLogin = ()=>{
  navegacion.innerHTML = ` 
  <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
<a href="/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Inicio</a>
  <a href="/registro/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Registrarse</a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">

      <a href="/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Inicio</a>

          <a href="/registro/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Registrarse</a>

      
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/login/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/login/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
  
<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
</div>
     
`
}

const crearNavRegistro = ()=>{
  navegacion.innerHTML = ` 
  <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
<a href="/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Inicio</a>
  <a href="/login/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Iniciar sesión</a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">

      <a href="/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Inicio</a>

      <a href="/login/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Iniciar sesión</a>

      
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/login/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/login/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
  
<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
</div>
     
`
}

const crearNavUsuario = ()=>{
  navegacion.innerHTML = ` 
  <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/productos/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
<a href="/carrito/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Carrito</a>
  <a href="/historial/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Pagos</a>
  <a id="btn-x" class=" cursor-pointer py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Cerrar sesión </a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">
      <a href="/carrito/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Carrito</a>

          <a href="/historial/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Pagos</a>

      
      <a
      id="btn-x"
          class="cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Cerrar sesión</a>
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/productos/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/carrito/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/historial/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
</div>

<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
     
`
}

const crearNavProducto = ()=>{
  navegacion.innerHTML = ` 
  <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/productos/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
  <a href="/productos/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Inicio</a>
<a href="/carrito/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Carrito</a>
  <a href="/historial/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Pagos</a>
  <a id="btn-x" class=" cursor-pointer py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Cerrar sesión </a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">
    <a href="/productos/"
      id="btn-x"
          class="py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Inicio</a>

      <a href="/carrito/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Carrito</a>

          <a href="/historial/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Pagos</a>

      
      <a
      id="btn-x"
          class="cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Cerrar sesión</a>
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class=" mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/productos/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/carrito/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/historial/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
</div>

<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
     
`
}

const crearNavCarrito = ()=>{
  navegacion.innerHTML = ` 
    <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/productos/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
  <a href="/productos/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Inicio</a>
  <a href="/historial/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Pagos</a>
  <a id="btn-x" class=" cursor-pointer py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Cerrar sesión </a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">
    <a href="/productos/"
      id="btn-x"
          class="py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Inicio</a>

          <a href="/historial/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Pagos</a>

      
      <a
      id="btn-x"
          class="cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Cerrar sesión</a>
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/productos/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/carrito/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/historial/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
</div>

<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
     
`
}

const crearNavDashboard= ()=>{
  navegacion.innerHTML = ` 
  <button class="hamburger">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  </button>
  <div class="flex items-center justify-between pb-5 mx-auto ">
  <a href="/productos/">
  <img src="/img/blanco 2-8.png" alt="logo" class="mt-2.5 w-100 h-12 ml-5">
  </a>


<!-- El menú -->
<nav class="menu md:hidden">
  <ul>
  <a href="/productos/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Inicio</a>
<a href="/carrito/" class=" py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Carrito</a>
  <a id="btn-x" class=" cursor-pointer py-2 px-4 rounded-lg font-bold text-white transition ease-in-out">Cerrar sesión </a>
  </ul>
</nav>

  
  
      


  <!--menu pc-->
  
  <div class="hidden md:flex flex-row gap-4 ">
    <a href="/productos/"
      id="btn-x"
          class="py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Inicio</a>

      <a href="/carrito/"
          class= "py-2 px-4 rounded-lg text-white hover:bg-teal-50 hover:text-black font-bold transition ease-in-out">Carrito</a>
      
      <a
      id="btn-x"
          class="cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-50 hover:text-black bg:text-black font-bold text-white transition ease-in-out">
         Cerrar sesión</a>
  </div>

</div>
</div>  


`

footer.innerHTML=`
<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 shadow-md bg-teal-900">
  <div class="flex flex-wrap justify-center mb-4">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Sobre nosotros</h5>
      <p class="text-white">Somos una tienda de zapatos online dedicada a ofrecerte una amplia selección de calzado para mujer, hombre y niños, con diseños modernos, clásicos y atemporales que se adaptan a tu estilo de vida único.</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Enlaces rápidos</h5>
      <ul class="list-none mb-4">
        <li><a href="/productos/" class="text-white hover:text-gray-900 transition ease-in-out">Inicio</a></li>
        <li><a href="/carrito/" class="text-white hover:text-gray-900 transition ease-in-out">Carrito</a></li>
        <li><a href="/historial/" class="text-white hover:text-gray-900 transition ease-in-out">Dashboard</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-r">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Redes sociales</h5>
      <ul class="list-none mb-4">
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-facebook-f" style="font-size: 24px;"></i> Facebook</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-twitter" style="font-size: 24px;"></i> Twitter</a></li>
        <li><a href="#" class="text-white hover:text-gray-900 transition ease-in-out"><i class="fab fa-instagram" style="font-size: 24px;"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <h5 class="uppercase tracking-wide font-bold mb-2 text-black">Ofertas</h5>
      <p class="text-white">Recibe noticias y promociones exclusivas</p>
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <p class="text-black">© 2024 Todos los derechos reservados.</p>
  </div>
  <div class="flex justify-center">
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Política de privacidad</a>
    <a href="#" class="text-black hover:text-gray-900 transition ease-in-out">Términos y condiciones</a>
  </div>
</div>

<div class="flex justify-center">
  <img src="/img/blanco-8.png" class="h-32 mx-auto block" alt="img">
</div>
     
`
}

//agregar las rutas para los componentes
if(window.location.pathname === '/'){
  //estoy en el home 
  crearNavHome()
}else if(window.location.pathname === '/login/'){
  crearNavLogin()

}else if(window.location.pathname === '/registro/'){
  crearNavRegistro()
}else if(window.location.pathname === '/seleccionar/'){
  crearNavUsuario()

}else if(window.location.pathname === '/productos/'){
  crearNavProducto()

}else if(window.location.pathname === '/carrito/'){
  crearNavCarrito()

}else if(window.location.pathname === '/historial/'){
  crearNavDashboard()
}

const navBtn = navegacion.children[0].children[2]
//console.log(navBtn)

navBtn.addEventListener('click', e=>{
  const menu = navegacion.children[0].children[1]


  
  if(!navBtn.classList.contains('active')){
  

  navBtn.classList.add('active')
  navBtn.innerHTML = `
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
`
  menu.classList.remove('hidden')
  menu.classList.add('flex')
}
})

