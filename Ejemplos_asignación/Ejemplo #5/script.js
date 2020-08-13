let padre = document.getElementById('content');
let parrafo = document.createElement('p');
parrafo.innerHTML = ' Si usted desea tener éxito debe buscar nuevos caminos, en lugar de recorrer los caminos tradicionales y trillados del éxito, que todos conocen. John David Rockefeller';
padre.appendChild(parrafo);
let titulo = document.createElement('h1');
titulo.innerHTML ='Ahora este título se encuentra después del h3 y no antes';
padre.appendChild(titulo);
let parrafo2 = document.createElement('p');
parrafo2.innerHTML ='El mundo que hemos creado es un proceso de nuestro pensamiento. No se puede cambiar sin cambiar nuestra forma de pensar. Einstein';
padre.appendChild(parrafo2);
let titulo3=document.createElement('h3');
titulo3.innerHTML='Estoy insertando este título antes del h1';
padre.appendChild(titulo3);
let antes=padre.insertBefore(titulo3, titulo);
console.log(antes);



