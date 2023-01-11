
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compras = ["Sal", "Huevos", "Leche", "Carne", "Arroz"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"

compras.push("Aceite de Girasol");

console.log(compras);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compras.pop();

console.log(compras);

// Una nueva lista que contenga las películas 
// posteriores al 1 de enero de 2010 (utilizando filter)

const peliculasFavoritas = [
    { titulo: "Spider-man 2", director: "Sam Reimi", fecha: 2004},
    { titulo: "Evangelion: 3.0+1.0 ", director: "Hideaki Anno", fecha: 2021},
    { titulo: "Interestelar", director: "Christopher Nolan", fecha: 2014},
]

const posterior = peliculasFavoritas.filter(obj => obj.fecha >  2010)
console.log(posterior);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculasFavoritas.map(( directores) => 
    `${directores.director} `);

    console.log(directores)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculasFavoritas.map(( titulos) => 
    `${titulos.titulo} `);

    console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

    console.log(titulos.concat(directores));

// - Una nueva lista que concatene la lista de directores 
// y la lista de los títulos (utilizando el factor de propagación)    
const propagacion = [...titulos, ...directores];

    console.log(propagacion);