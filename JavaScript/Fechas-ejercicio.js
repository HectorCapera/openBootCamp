
//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy

const fechaActual = new Date();

console.log (fechaActual);

// - La fecha de tu nacimiento

const fechaCumpleaños = new Date(1998, 3, 15) 

console.log(fechaCumpleaños)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fechaActual > fechaCumpleaños); 

//- Una variable que contenga el día de tu nacimiento

console.log(fechaCumpleaños.getDate());

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

console.log(fechaCumpleaños.getMonth() + 1);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

console.log (fechaCumpleaños.getFullYear()); 