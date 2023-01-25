// localStorage.setItem("nombre", "Hector")
// localStorage.setItem("Juan", "Rozo")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({nombre: "Hector", apellido: "Capera"}))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> convierte un objeto/array en un string
// JSON.parse -> convierte un objeto/array convertido por stringify en un objeto de javascript

// Lo mismo para session storage

// sessionStorage.setItem("nombre-sesion", "Hector")

// Para cookies se utiliza

document.cookie = "nombreCooke=HectorCookie"

document.cookie = "nombreCaducidad=Nombre;expires =" + new Date(2023,0,27).toUTCString()

console.log(document.cookie)