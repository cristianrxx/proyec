import { createNotificacion } from "../components/notificaciones.js"

const formulario = document.querySelector('#formulario')
const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const match = document.querySelector('#match-input')  
const btnRegistro = document.querySelector('#form-btn')



const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const nameVal= /^[A-Z][a-z]*(?: [A-Z][a-z]*)?$/

let valEmail = false
let valPass = false
let valMatch = false
let valName = false

nameInput.addEventListener('input',e=>{

  valName = nameVal.test(e.target.value)

  validar(nameInput,valName)

})

passwordInput.addEventListener('input',e=>{

  valPass = passVal.test(e.target.value)

  validar(passwordInput,valPass)
  validar(match, valMatch)
})


match.addEventListener('input',e=>{

  valMatch = e.target.value === passwordInput.value

  validar(match,valMatch)
  validar(passwordInput,valPass) 
})

emailInput.addEventListener('input',e=>{

  valEmail = emailVal.test(e.target.value)

  validar(emailInput,valEmail)

})

const validar = (input,val)=>{
  
  btnRegistro.disabled = valName && valEmail && valPass && valMatch ? false : true
  console.log(valEmail,valName,valPass,valMatch)
  if(val){
    input.classList.remove('focus:outline-blue-600')
    input.classList.add('focus:outline-green-600')
  }else if(input.value === ""){
    input.classList.remove('focus:outline-green-600')
    input.classList.remove('focus:outline-red-600')
    input.classList.add('focus:outline-blue-600')
  }else{
    input.classList.remove('focus:outline-green-600')
    input.classList.remove('focus:outline-blue-600')
    input.classList.add('focus:outline-red-600')
  }


}

formulario.addEventListener('submit', async e=>{
  e.preventDefault()

  const newUser  = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    passwordval: match.value
  }

  //console.log(newUser)

  try{
    const respuesta = await axios.post('/api/users', newUser)
    //console.log(respuesta.data.mensaje)
    createNotificacion(false,respuesta.data.mensaje)
  }catch(error){
    //console.log(error)
    createNotificacion(true,error.response.data.error)
  }
})