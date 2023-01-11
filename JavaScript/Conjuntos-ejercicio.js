
let array = ["José", "Eudie", "Carlos", "Diana", "Hector" ]

// - Un nuevo Set con los nombres de tu familia
const familiaSet = new Set (array);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familiaSet.add("Hector")

console.log(familiaSet);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

familiaSet.add ("JavaScript");

console.log (familiaSet)