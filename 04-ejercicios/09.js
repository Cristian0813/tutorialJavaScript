/**
 * Crea un algoritmo que devuelva un array
 * de objetos en base a pares
 */

let pairs = [
  [1, { name: 'Felipe' }],
  [2, { name: 'Fernando' }],
  [3, { name: 'Chanchito' }],
];

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

function toCollection(arr) {
  let collection = [];

  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}
let resultado = toCollection(pairs);
console.log('resultado', resultado);
