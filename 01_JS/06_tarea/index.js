// 1- Crea una variable "nombre" asignar un valor del tipo string. Luego imprime el valor de la variable en la consola.

let nombre = 'Victor';
console.log(nombre);

// 3- Crea dos variables una "nombre" y otra "apellido" asignar  valores del tipo string. Crea una tercer variable que sea "nombre completo" (en camelcase) asignar un valor del tipo string que sea el resultado de concatenar los valores de las primeras dos variables.
// Imprimir resultado en la consola.

let nombre_2 = 'Carlos';
let apellido = 'Diaz';
let nombreCompleto = nombre_2 + ' ' + apellido; // Facu style
let nombreCompleto_2 = `${nombre_2} ${apellido}`; //Victor style

console.log(nombreCompleto);
console.log(nombreCompleto_2);

// 4. crea una variable cualquiera asignar un valor del tipo string, imprimir en consola el valor en mayusculas.
let myString = 'holaaaaaaa';

console.log(myString.toUpperCase());

// 5. crea una variable cualquiera asignar un valor del tipo string, imprimir en consola el valor de su cantidad de caracteres.
let myString2 = 'okmnjiuytrewqasdzxcv';
console.log(myString2.length);

// 6. Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por consola los doce meses, imprimiendo 1 a 1

let meses = [
  'Enero ',
  'Febrero ',
  'Marzo ',
  'Abril ',
  'Mayo ',
  'Junio ',
  'Julio ',
  'Agosto ',
  'Septiembre ',
  'Octubre ',
  'Noviembre ',
  'Diciembre ',
];

console.log('[Indice manual]', meses[0]);
console.log('[Indice manual]', meses[1]);
console.log('[Indice manual]', meses[2]);
console.log('[Indice manual]', meses[3]);
console.log('[Indice manual]', meses[4]);
console.log('[Indice manual]', meses[5]);
console.log('[Indice manual]', meses[6]);
console.log('[Indice manual]', meses[7]);
console.log('[Indice manual]', meses[8]);
console.log('[Indice manual]', meses[9]);
console.log('[Indice manual]', meses[10]);
console.log('[Indice manual]', meses[11]);

// 7. Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por consola los doce meses, utilizando un for loop

//For Loop Tradicional
for (let i = 0; i < meses.length; i++) {
  console.log('[For Loop]', meses[i]);
}

//New For Of
for (let mes of meses) {
  console.log('[For of]', mes);
}

// 8. Dado el siguiente código escribe las condiciones para que siempre sean correctas.
let num1 = 5;
let num2 = 8;

if (num1 < num2) {
  console.log('num1 no es mayor que num2');
}
if (num2 > 0) {
  console.log('num2 es positivo');
}
if (num1 < 0 || num1 !== 0) {
  console.log('num1 es negativo o distinto de cero');
}
if (num1 + 1 <= num2) {
  console.log(
    'Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2'
  );
}
if (num2 > 0 && num1 > 0) {
  console.log('num1 y num2 son positivos');
}

// 9. Crear un array llamado números, con los valores del 1 al 10 utiliza un for of para recorrer el array, en cada iteración deberias imprimir en la consola el resultado del la multiplicación del numero actual por el numero 5.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let resultado of numeros) {
  console.log(resultado * 5);
}

for (let n of numeros) {
  console.log(n * 5);
}

// 10. Crea un objeto persona con los propiedades nombre, apellido, edad, imprime el el objeto en la consola.

let persona = {
  nombre: 'Franco',
  apellido: 'Morel',
  edad: 18,
};
console.log(persona);

// 11. En el objeto persona creado en el ejercicio anterior, agregar la propiedad dni con un valor numerico.  Imprime el objeto en la consola.
let miVar = 'nombre';

persona.dni = 12345678;
persona['dni2'] = 12345678;
console.log(persona);
persona['dni2'] = 11111111;
console.log(persona);
persona.dni2 = 2222222;
persona[miVar];
console.log(persona.miVar);

// 12. Al objeto persona que hemos creado, debes modificar el valor de la propiedad apellido. Imprimir el resultado en la consola.

persona.apellido = 'Diaz';

console.log(persona);

// 13. En el objeto persona que hemos creado, elimina la propiedad nombre.  Imprimir el resultado en la consola.
delete persona.nombre;
console.log(persona);

// 14. Crea una función que retorne el valor de la suma de dos números enteros,ejecuta la funcion y asigna el valor de retorno a una variable. Imprime el valor de la variable en la consola.
function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 5); // 10

console.log(resultado);

// 15. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Imprimir el resultado en la consola.
function esParOImpar(num) {
  if (num % 2 === 0) {
    return 'Es par';
  }
  return 'No es par';
}

console.log(esParOImpar(11));

// 16. Escribir el código de una función a la que se pasa como parámetro un Array de enteros y devuelve como resultado la sumatoria de todos los numero del array.
// Imprimir el resultado en la consola.
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumatoria(array) {
  return array.reduce((acc, valorActual) => acc + valorActual);
}
console.log(sumatoria(numeros2));

// 17. Escribir el código de una función llamada "contar" a la que se pasa como parámetro un numero entero,  esta función debe imprimir en consola la secuencia de números desde 0 hasta el numero que recibió como parametro.

function sumatoria(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
sumatoria(10);
