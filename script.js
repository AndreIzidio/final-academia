//modo dark
//
//const header = document.querySelector('body');
//const icon = document.querySelector('.icon')

//icon.addEventListener('click' , () => {
 // header.classList.toggle('dark')
//})
//

//modo dark
const html = document.querySelector('html')
const check = document.getElementById('darkmode')
darkmode.addEventListener('change', function(){
  html.classList.toggle('escuro')
})





//menu hamburguer

let menu = document.querySelector('#menu-hamburguer');
let navbar = document.querySelector('.cabecalho');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () => {

  menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}



//IMC
const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso'
    } else if (imc < 25) {
      classification = 'Peso normal'
    } else if (imc < 30) {
      classification = 'Acima do peso'
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
    } else if (imc < 41) {
      classification = 'Obesidade Grau II'
    } else {
      classification = 'Obesidade Grau III'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}