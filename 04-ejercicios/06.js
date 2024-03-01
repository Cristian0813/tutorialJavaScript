/**
 * Crea un algoritmo que devuelva cantidad
 * de números positivos de un array
 */
let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPsitivos(arr) {
  let contador = 0;

  for (elemento of arr) {
    if (elemento > 0) {
      contador++;
    }
  }
  return contador;
}
let resultado = cuantosPsitivos(array);
console.log(resultado); //Imprimirá el número de numeros positivos en la consola
