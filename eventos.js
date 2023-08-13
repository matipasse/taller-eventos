const div = document.querySelector("div");
const boton = document.querySelector('button')

div.addEventListener('click', () => {
    alert('Hola! Soy el div');
  })

boton.addEventListener('click', (e) => {
  alert('Hola!');
  e.stopPropagation();
})


