let padre = document.getElementById('content');
let parrafo = document.createElement('p');
parrafo.innerHTML = '¿Quién es mi padre? 😫';
padre.appendChild(parrafo);
console.log(parrafo.parentNode);