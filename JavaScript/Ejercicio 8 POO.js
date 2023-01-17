// Una clase llamada "Estudiante" 
class Estudiante {
//- Una variable llamada nombre
// Otra variable lista llamada asignaturas 
//con 3 asignaturas: Javascript, HTML, CSS
    constructor(nombre, asignatura1, asignatura2, asignatura3){
        this.nombre = nombre
        this.asignatura1 = asignatura1
        this.asignatura2 = asignatura2
        this.asignatura3 = asignatura3
// Un método "obtenDatos" 
// que devuelva un objeto con las propiedades nombre y asignaturas
    }
    obtenDatos(){
        console.log(`Mi nombre es ${this.nombre} y actualmente curso 
        ${this.asignatura1}, ${this.asignatura2} y 
        ${this.asignatura3} en OpenBootCamp`)
    }
}

// - Crea una nueva instancia de "Estudiante"

let datosEstudiante = new Estudiante ("Hector", "Javascript", "HTML", "CSS");
console.log(datosEstudiante)

// - Haz la llamada al método obtenDatos

let obtenDatos = datosEstudiante

console.log(obtenDatos)