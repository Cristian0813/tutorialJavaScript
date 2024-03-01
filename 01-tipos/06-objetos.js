// Personaje de Tv
let nombre = "Tanjiro";
let anime = "Demon salyer";
let edad = 16;

// Esto es un objeto literal
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon salyer",
  edad: 16,
};

console.log(personaje); // Imprime el objeto personaje completo en la consola
console.log(personaje.nombre); // Imprime el valor de la propiedad "nombre" del objeto personaje en la consola
console.log(personaje["anime"]); // Imprime el valor de la propiedad "anime" del objeto personaje en la consola

personaje.edad = 13; // Cambia el valor de la propiedad "edad" del objeto personaje a 13 

let llave = edad; // Crea una variable llamada "llave" y le asigna el valor de la variable "edad"
personaje[llave] = 16;// Cambia el valor de la propiedad "edad" del objeto personaje a 16 usando la variable "llave"

delete personaje.anime; // Elimina la propiedad "anime" del objeto personaje
console.log(personaje); // Imprime el objeto personaje actualizado en la consola
console.log(personaje.nombre); // Imprime el valor de la propiedad "nombre" del objeto personaje en la consola
console.log(personaje["anime"]); // Imprime el valor de la propiedad "anime" del objeto personaje en la consola
