const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu img')

menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
})

function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}
// const titulo = document.querySelector('.titulo-principal');
// typeWrite(titulo);