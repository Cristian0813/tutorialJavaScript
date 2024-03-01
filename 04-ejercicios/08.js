/**
 * Crea un algoritmo que tome un array de
 * objetos y de vuelva un array de pares
 */

let array = [
  {
    id: 1,
    name: 'Felipe',
  },
  {
    id: 2,
    name: 'Fernando',
  },
  {
    id: 3,
    name: 'Chanchito',
  },
];

let pares = [
  [1, { id: 1, name: 'Felipe' }],
  [2, { id: 2, name: 'Fernando' }],
  [3, { id: 3, name: 'Chanchito' }],
];

function toPairs(arr) {
  let pairs = [];

  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}
let resultado = toPairs(array);
console.log(resultado); // Imprime el arreglo "pares"
