import { createNotificacion } from "../components/notificaciones.js";
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!emailInput.value || !passwordInput.value) {
        //campos incorrectos
        //console.log('campos incorrectos')

        createNotificacion(true, 'Campos vacios');
        return;
    } else {
        const objUser = {
            email: emailInput.value,
            password: passwordInput.value
        }
        //console.log(objUser)

        try {
            const respuesta = await axios.get('/api/users/login',{
                params:{
                    email: emailInput.value,
                    password: passwordInput.value
                }});
            //console.log(respuesta.data);

            console.log(respuesta);

            
               if (respuesta.data.rol === 1) {
             //    console.log('ADMINISTRADOR');
              window.location.href = '/admin/';
            } else {
              window.location.href = '/funcion/';
                 console.log('CLIENTE');
             }
         
        } catch (error) {
            alert('usuario no encontrado');
            console.log(error);
            
        }

      
    }
});