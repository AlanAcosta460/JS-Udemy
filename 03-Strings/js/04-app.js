const producto6 = '         Monitor 20 pulgadas         ';

console.log(producto6);
console.log(producto6.length);

// ** trimStart **
console.log(producto6.trimStart()); // Elimina los espacios en blanco del inicio del string

// ** trimEnd ** 
console.log(producto6.trimEnd()); // Elimina los espacios en blanco del final del string

// ** trim **
console.log(producto6.trim()); // Elimina los espacios en blanco antes y despues del string
console.log(producto6.trimStart().trimEnd()); // Hace lo mismo que trim()