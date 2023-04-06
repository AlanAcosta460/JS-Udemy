const producto8 = 'Monitor 20 pulgadas';

// ** repeat **
const texto = 'en Promoción '.repeat(3); // Repite el texto las veces que se necesite

console.log(texto);
console.log(`${producto8} ${texto} !!!`);

// ** split **
console.log(producto8.split(' ')); // Dividir el string

const semana = 'Lunes, Martes, Miércoles, Jueves, Viernes, Sabado, Domingo';
console.log(semana.split(', '));