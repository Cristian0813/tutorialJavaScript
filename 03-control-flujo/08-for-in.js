let user = {
  id: 1,
  name: "John",
  age: 30,
  city: "New York",
};

for (let prop in user) {
  console.log(prop, user[prop]);
}

let animales = ["Chanchito feliz", "Dragón", "Canguro"];
for (let indice in animales) {
  console.log(indice, animales[indice]);
}
