function crearUsuario(name, email) {
  return {
    name,
    email,
    activo: true,
    recuperarClave: function () {
      console.log('Se ha recuperado la clave...');
    },
  };
}

let user1 = crearUsuario('Cristian Arias', 'cristian@email.com');
let user2 = crearUsuario('Thaliana Arias', 'thaliana@email.com');
let user3 = crearUsuario('Luna Arias', 'luna@email.com');

console.log(user1, user2, user3); // Se llama a las funciones de los usuarios para probar que funcionan
