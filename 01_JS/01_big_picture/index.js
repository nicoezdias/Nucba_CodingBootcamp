//VALUES
// JS es un lenguaje de Tipado Dinamico
// En JS no le definimos nosotros un tipo de dato a la variable.
1; // Number
2.1421321321584684; //Number
'Hola clase!!! 1321681321 $%%#@()(?????', //String
  true; //Boolean
false; //Boolean
null; // sin valor - Puede estar definido
undefined; // Sin valor - y no definido
[1.3215, 5, 'hola', false]; // Array - Colecciones de Values - indexados en O -> N
let mivar = {
  nombre: 'nucba',
  apellido: 'Lucho',
  edad: 1200,
  esAlto: false,
};

//Objetos - Son conjuntos de datos - y son pares Clave - Valor

//OPERADORES ---  + - * /
1 + 1; //-> 2
1 - 1; // -> 0

'Hola' + ' ' + 'Facu'; // -> "Hola facu"

!false; // -> true
!true; // -> false

true || false; // true o false -> TRUE
true && false; // true Y false -> FALSE

3 == 3; // True
3 == '3'; // '3'== '3' // True - COERCION.
3 === '3'; // False - Por que Mabel???? - NO LE PERMITE A JS HACER COERCION

//TYPES

// console.log(typeof 1);
// console.log(typeof 'Nucba');
// console.log(typeof false);
// console.log(typeof true);
// console.log(typeof { edad: 35 });
// console.log(typeof [35]);
// console.log(typeof function () {});
// console.log(typeof null);
// console.log(typeof undefined);

//VARIABLES
//Es un Lugar en Memoria de la compu donde guardamos un valor / expresion / Referencia

// VAR - LET - CONST
// 0x13216841321 - no viable para el ser humano

// EN un paso
var nombre = 'Nucba';

// en dos pasos
var miOtroNombre;
miOtroNombre = 'Nucba 2';

// console.log(miOtroNombre);

var numero = 32;
var miTexto = '3213s2d1fs5df4s6dg46s8fg7dfg47';
var miBool = false;
var miObjeto = { name: 'Facu' };
var miArraySuperCHeto = ['Cheto', 'Mallll'];
var miFuncion = function () {};

// console.log(numero);
// console.log(miTexto);
// console.log(miBool);
// console.log(miObjeto);
// console.log(miArraySuperCHeto);
// console.log(miFuncion);

// ESTRUCTURAS DE CONTROL
// IF / ELSE - SWITCH

// operadores de comparacion / igualdad / == === > < <= >=
// if (edad >= 18) {
//   //BLOQUE SI CUMPLE CON LA CONDICION
//   if (edad > 30) {
//     console.log('Podes Votar y sos un votante adulto');
//     return;
//   } else {
//     console.log('Podes Votar y sos Joven');
//   }
// } else {
//   //BLOQUE SI NO CUMPLE CON LA CONDICION
//   console.log('No podes Votar, anda a dormir!!');
// }

//SWITCH
// var mirARRAY = ['Autorizado', 'No autorizado', 'Pendiente'];
// switch (mirARRAY[0]) {
//   case 'Autorizado':
//     console.log('Podes Votar y sos Joven');
//     break;
//   case 'No autorizado':
//     console.log('Podes Votar y sos Joven');
//     break;
//   case 'Pendiente':
//     console.log('Podes Votar y sos Joven');
//     break;
//   default:
//     console.log('No podes Votar, anda a dormir!!');
//     break;
// }

//LOOPS

var miOtroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(miOtroArray[0]);
// console.log(miOtroArray[1]);
// console.log(miOtroArray[2]);
// console.log(miOtroArray[3]);
// console.log(miOtroArray[4]);
// console.log(miOtroArray[5]);
// console.log(miOtroArray[6]);
// console.log(miOtroArray[7]);
// console.log(miOtroArray[8]);
// console.log(miOtroArray[9]);

// FOR - WHILE - FOR of y EL FOR in

var numerito = 10;
numerito++;
numerito + 1;
// console.log(miOtroArray.length);

var miOtroArray2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//FOR
// for (var index = 0; index < miOtroArray2.length; index++) {
//   console.log('Vuelta: ' + index + ' ' + 'Valor: ' + miOtroArray2[index]);
// }

//WHILE
// var contador = 0;
// while (contador < miOtroArray2.length) {
//   console.log('Vuelta: ' + contador + ' ' + 'Valor: ' + miOtroArray2[contador]);
//   contador++;
// }

//FUNCTION
// Las funciones son bloques de codigo que nos permiten escribir codigo reutilizable

function diHola(nombre = '') {
  console.log('Hola ' + nombre);
}

diHola('Facu');
diHola('Carlos');
diHola('Victo');
diHola('Andre');
diHola('Caro');

// function multiplicarPor2(numero) {
//   return numero * 2;
// }

// function multiplicarPor3(numero) {
//     return numero * 3;
//   }

function multiplicarPorUnNumero(number) {
  var miNumeroRecordado = number;
  return function (segundoNumero) {
    return miNumeroRecordado * segundoNumero;
  };
}

var multiplicarPor2 = multiplicarPorUnNumero(2);
var multiplicarPor3 = multiplicarPorUnNumero(3);

console.log(multiplicarPor2(1));
console.log(multiplicarPor2(2));
console.log(multiplicarPor2(3));
console.log(multiplicarPor2(4));
console.log(multiplicarPor2(5));
console.log(multiplicarPor2(6));

console.log(multiplicarPor3(1));
console.log(multiplicarPor3(2));
console.log(multiplicarPor3(3));
console.log(multiplicarPor3(4));
console.log(multiplicarPor3(5));
console.log(multiplicarPor3(6));
