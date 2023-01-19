// Crea un nuevo proyecto de Node
// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
// - Duplica el archivo del ejercicio de la sesión 04-Textos
// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
let str_1 = "Hector";

let str_2 = "Capera   ";

let str_3 = "estudiante";
console.log(str_1 + str_2);

let str_4 = "estudianteMayus";
console.log(str_3.toUpperCase());

let str_5 = "estudianteMinus";
console.log(str_3.toLowerCase());

let number1 = str_3; 
console.log(number1.length);

let number2 = str_1;
console.log(number2.indexOf("Hector"));
console.log(number2.charAt(0));

let number3 = str_2;
console.log(number3.indexOf("Capera"));
console.log(number3.charAt(0));

let estudiante = str_1 + str_2;
console.log(estudiante.trimEnd().length);
    
console.log(estudiante.includes("Hector"));