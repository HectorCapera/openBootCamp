//- Integra el fichero index.js en el html

// - Crea una variable con tu nombre
let nombre = "Hector";

//- Crea una variable con tu apellido
let apellido = "Capera"

const obj = {
    nombre:"Hector",
    apellido: "Capera"
}
// - Crea un objeto con tu nombre y tu apellido
// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("obj", JSON.stringify({nombre: "Hector", apellido: "Capera"}))

console.log(JSON.parse(localStorage.getItem("obj")))

// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("obj", JSON.stringify({nombre: "Hector", apellido: "Capera"}))

console.log(JSON.parse(sessionStorage.getItem("obj")))

// 

document.cookie = "objetoCookie=obj" + obj

document.cookie ="caducidad=Obj;expires=" + new Date(2023,0,25,2)
// document.cookie = "nombreCaducidad=Nombre;expires =" + new Date(2023,0,27).toUTCString()

console.log(document.cookie)