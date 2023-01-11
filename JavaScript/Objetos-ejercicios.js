
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Hector", 
    apellido: "Capera",
    edad: 24,
    altura: 1.75,
    eresDesarrollador: true

}
// - Una variable que obtenga tu edad a partir del objeto anterior

const datos = {...datosPersonales}

console.log(datosPersonales.edad)

//- Una lista que contenga el objeto con tus datos personales 
//y un nuevo objeto con los datos personales de tus dos mejores amigos

const listaAmigos = [
    {nombre: "Juan", apellido: "Rozo", edad: 26, altura: 1.70, eresDesarrollador: false},
    {nombre: "Hector", apellido: "Capera", edad: 24, altura: 1.75, eresDesarrollador: true},
    {nombre: "Alejandro", apellido: "Molina", edad: 27, altura: 1.68, eresDesarrollador: false}
]

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

listaAmigos.sort((a, b) => b.edad - a.edad);
console.log(listaAmigos)