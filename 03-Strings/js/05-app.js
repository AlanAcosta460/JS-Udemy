const producto7 = 'Monitor 20 pulgadas';

console.log(producto7);

// ** replace **
console.log(producto7.replace('pulgadas', '"')); // Remplazar 
console.log(producto7.replace('Monitor', 'Monitor Curvo'));

// ** slice **
console.log(producto7.slice(0, 10)); // Cortar (Monitor 20)
console.log(producto7.slice(8)); // (20 pulgadas)
// console.log(producto7.slice(5, 2)); // No funciona si el primer número es mayor que el primero

// ** substring **
console.log(producto7.substring(0, 10)); // Alternativa a slice
console.log(producto7.substring(5, 2)); // Si funciona si el primer número es mayor que el primero