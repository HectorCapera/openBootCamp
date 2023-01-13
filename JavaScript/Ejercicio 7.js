
//- Una función sin parámetros que devuelva siempre "true"

function afirmacion (){
    return true    
}
console.log(afirmacion())


// - Una función asíncrona que utilice un setTimeout y pase por consola un
// "Hola soy una promesa" 5 segundos después de haberse ejecutado

const saludo = new Promise((resolve, reject)=>{
    let numero = 5;
    setTimeout(function(){
        console.log("Hola soy una promesa de 5 segundos")
    }, 5000);
    if ( numero == 5 ){
        resolve()
    } else{
        reject()
    }
})

saludo
    .then(()=> console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"));

// - Una función generadora de índices pares automáticos

function* foo(index) {
    while (index < 20) {
        yield index;
        index+=2;
    }
}

const iterator = foo(0);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);