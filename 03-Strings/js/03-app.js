// ** Concatenación **
const producto5 = 'Monitor 20 pulgadas ',
    precio1 = '30 USD ',
    precio2 = '50 USD';

console.log(producto5.concat(precio1)); // Unir dos strings. (Monitor 20 pulgadas 30 USD)
console.log(producto5.concat('En descuento '));

console.log(producto5 + 'Con un precio de ' + precio2); // Usando el símbolo (+)
console.log('El producto ' + producto5 + 'tiene un precio de ' + precio2);
console.log('El producto ', producto5, 'tiene un precio de ', precio2);

// ** Template Strings **
console.log(`El producto ${producto5} tiene un precio de ${precio1}`); // Se usa ${nombreDeLaVariable}