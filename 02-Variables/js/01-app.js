// ** Creación de Variables con var **
var producto1 = 'Monitor de 24 pulgadas'; // Creación y asignación de variables usando var
console.log(producto1);

// ** Reasignación de variables **
producto1 = 'Monitor de 19 pulgadas'; // Cambiar el valor de la variable 
console.log(producto1);
producto1 = 12; // No se especifica el tipo de dato
console.log(producto1);

// ** Inicializar sin valor **
var disponible; 
disponible = true;
disponible = false;

// ** Inicializar múltiples variables **
var categoria = 'Computadoras',
    marca = 'Lenovo',
    calificacion = 5;

// ** Reglas al nombrar variables **
// var 20dias; // No es valido empezar con un numero
var dias20;
// var 01_;
var _01; // Puede empezar con guion bajo 

// ** Estilos para nombrar variables **
var nombreProducto; // camelCase
var nombre_producto; // snake_case
var NombreProducto; // PascalCase