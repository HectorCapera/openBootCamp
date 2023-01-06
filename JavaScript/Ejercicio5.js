
//- Una variable que contenga tu altura en centímetros (entero)

let numero1 = 175.00;
    console.log("mi altura es: ", parseInt(numero1), "cm");

    //- - Una variable que contenga tu altura en metros (número de coma flotante)
let numero2 = 1.75;
    console.log("mi altura es: ", parseFloat(numero2), "mt");

    // - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let numero3 = 89.4;
    console.log("mi peso es: ", parseFloat(numero3), "kg");

    // - Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(numero1.toPrecision(1));

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

console.log(numero3.toFixed(1))

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript