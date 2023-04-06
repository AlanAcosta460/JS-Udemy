// ** Strings Methods **
const producto4 = 'Monitor 20 pulgadas';

// ** length **
console.log(producto4); // String 
console.log(producto4.length); // Tamaño del string

// ** indexOf **
console.log(producto4.indexOf('Monitor')); // Muestra la posición de una palabra en el string (0)
console.log(producto4.indexOf('pulgadas')); // (11)
console.log(producto4.indexOf('Tablet')); // Si no lo encuntra, muestra un (-1)

// ** includes **
console.log(producto4.includes('Monitor')); // Imprime true si la palabra esta en el string, si no esta, imprime false
console.log(producto4.includes('pulgadas')); // true
console.log(producto4.includes('Tablet')); // false