function suma(a, b) {
  console.log(arguments);
  return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log("Tu resultado es ", resultado);
console.log(typeof resultado);
