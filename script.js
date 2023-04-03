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




function calcularIMC(){
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  const imc = (peso / (altura*altura)).toFixed(1);

  document.querySelector("h1").innerHTML = imc;

}