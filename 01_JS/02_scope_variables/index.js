//SCOPE
//QUE ES????
//IMPORTANTE NUNCA MAS VAMOS A USAR VAR !!!!!!!!!!!!!!!!

// palabra reservada var - NO USAR NUNCA MAS!!!

//GLOBAL
let miVariableSuperImportante = 'Soy global';

//Scope en funciones
function fn() {
  let soyFn = 'Soy Fn';
  console.log(soyFn);
}

//Scope Bloque - FOR - IF/ELSE - switch
{
  let soyBloque = 'Hola soy bloque';
  soyBloque = 'Hola soy bloqueeeeeeeeee';
  console.log(soyBloque);
}

//CONST - constante
// const MI_TEXT = 'texto'; //VALOR PRIMITIVO
// const MI_TEXT = 'texto'; //VALOR PRIMITIVO
// console.log(MI_TEXT);

//METODOS DE LOS STRINGS
let myString1 = 'Hola soy un string 21232dasda3s2d16s5dg4 asd5f4s6d8g4s s H';
let myString2 = 'String 2';
let myString3 = 'HOLA SOY UN STRINGGGGGGGGGGGGGG';
let myString4 = '           Hola soy un string             ';

//METODOS TRANQUI PERO IMPORTANTES
console.log('\n');
console.log(' ---------- STRINGS ---------');
console.log(myString1.length);
console.log(myString1[myString1.length - 1]);
console.log(myString2.toUpperCase());
console.log(myString3.toLowerCase());
console.log(myString4.trim());

console.log('\n');

//METODOS TRANQUI PERO IMPORTANTES

// indexOf - devulve el indice si encuentra el valor o -1 sino lo encuentra
console.log(myString1.indexOf('soy'));
// console.log(myString1.indexOf());
// console.log(myString2.indexOf());
// console.log(myString3.indexOf());
// console.log(myString4.indexOf());

//SLICE - este nos devuelve pedacito del string desde los indices que le pasamos como parametro

let texto3 =
  'Baere jkdsncoisJDFBOifskJDFBASLKDMFBNASLDKGJBSALDKJFBASLKDJFHLZMXC LKSJDBFLaksdhjfoisHBCOISHDBFGOIshgoaisdhbgoasiubgy';
let token = texto3.slice(6);

let texto4 = 'Hola soy un string';
console.log(texto4.slice(5, 8));

//SPLIT - nos devuelve un array separado por la condicion que le pasemos

let tokenV2 = texto3.split(' ');
console.log(tokenV2[1]);

let fakeCSV = '120,M,ROJO,rema adidas';
let textoToArray = fakeCSV.split(',');
console.log(textoToArray);

//REPLACE
let miTexto = 'Mi textoa';
let tuTexto = miTexto.replace('Mi', 'Tu');
console.log(tuTexto);

//CharAt / CharCodeAt
console.log(miTexto.charAt(0));
console.log('A'.charCodeAt());

for (let i = 0; i < miTexto.length; i++) {
  console.log(miTexto[i]);
}

for (let letra of miTexto) {
  console.log(letra);
}

let cadena1 = 'Oh ';
let cadena2 = 'qué maravillosa ';
let cadena3 = "mañana'.";
let cadena4 = cadena1.concat(cadena2, cadena3); // devuelve "Oh qué maravillosa mañana'."
console.log(cadena4);
//TEMPLATE STRING

let nombreTexto = 'Facu';
let apellidoTexto = 'Diaz';
let nombreCompleto = `${nombreTexto} ${apellidoTexto}
buenisimo
otro salto
añklsdjlaksjd
lakjsdlaksdj
`;

console.log(nombreCompleto);

console.log('\n');
console.log(' ---------- Number / Math class ---------');
//NUMBER
// 10 -> Number
// 12.1351351320 -> Number

//Clase Math

console.log(Math.PI);
console.log(Math.round(3.66));
console.log(Math.round(3.35));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.99));
console.log(Math.abs(-5));
console.log(Math.pow(5, 2));

//
let myRand = Math.random();
console.log('[myRand]: ' + myRand);

//PASO A PASO
let paso1 = Math.random(); // 0.2133543121681 - MAX 0.999999999999999
let paso2 = paso1 * 10; // 2.133543121681
let paso3 = Math.floor(paso2); // 2;
let paso4 = paso3 + 1;

// console.log('[Random]: ', paso4);

for (let index = 0; index < 50; index++) {
  let randNum = Math.floor(Math.random() * 100) + 1;
  console.log('[Random]: ', randNum);
}

console.log('4' + 1);
let numText = '5';
let numText2 = '5.212151';

let numInt = parseInt(numText);
let numFloat = parseFloat(numText2);

console.log(numText, numInt);
console.log(numText2, numFloat);

console.log(typeof numText, typeof numInt);
console.log(typeof numText2, typeof numFloat);

console.log('\n');
console.log(' ---------- ARRAY 🙂 ---------');
// ARRAYSSSSS - la primer estructura de DATOS!
let miArray = new Array(1, 5, 10, 'hola', false, true, [], {}, function () {});
console.log(miArray);

let miArray2 = [1, 5, 10, 'hola', false, true, [], {}, function () {}];

console.log(miArray2[0]);
console.log(miArray2[1]);
console.log(miArray2[2]);

let arrayChat = [
  ['Holaaaa!!!!', '13:39', 'Victor'],
  ['Holaaaa!!!!, como va??', '13:40', 'Carlos'],
];

console.log('--- CHAT ARRAY ---- \n');
// console.log(`Usuario: ${arrayChat[0][2]} - ${arrayChat[0][1]}
//   - ${arrayChat[0][0]}
// `);
// console.log(`Usuario: ${arrayChat[1][2]} - ${arrayChat[1][1]}
//   - ${arrayChat[1][0]}
// `);

console.log('\n');

// PUSH agrega al final del array
arrayChat.push(['Todo bien aca aprendiendo JS en nucba 🙂', '13:54', 'Victor']);
arrayChat.push(['Yo tambien Aguante los ARRAYs!🍺 ', '13:55', 'Carlos']);

//POP elimina del array el ultimo elemento
arrayChat.pop();

//
//UNSHIFTH AGREGA AL INICIO DEL ARRAY
arrayChat.unshift(['Yo tambien Aguante los ARRAYs!🍺 ', '13:55', 'Carlos']);

//console.log(arrayChat);

// console.log(`Usuario: ${arrayChat[0][2]} - ${arrayChat[0][1]}
//   - ${arrayChat[0][0]}
// `);
// console.log(`Usuario: ${arrayChat[1][2]} - ${arrayChat[1][1]}
//   - ${arrayChat[1][0]}
// `);

// console.log(`Usuario: ${arrayChat[2][2]} - ${arrayChat[2][1]}
//   - ${arrayChat[2][0]}
// `);

// console.log(`Usuario: ${arrayChat[3][2]} - ${arrayChat[3][1]}
//   - ${arrayChat[3][0]}
// `);

arrayChat.shift();
arrayChat.push(['Yo tambien Aguante los ARRAYs!🍺 ', '13:55', 'Carlos']);
//console.log(arrayChat);
arrayChat = [
  ['Holaaaa!!!!', '13:39', 'Victor'],
  ['Holaaaa!!!!, como va??', '13:40', 'Carlos'],
  ['Todo bien aca aprendiendo JS en nucba 🙂', '13:54', 'Victor'],
  ['Yo tambien Aguante los ARRAYs!🍺 ', '13:55', 'Carlos'],
];

// for (let index = 0; index < arrayChat.length; index++) {
//   console.log('[index] :', index);
//   console.log('[FOR LOOP]', arrayChat[index]);
// }

for (let msjChat of arrayChat) {
  //msj = ['val1','val2', 'val']
  //console.log('[FOR OF]: ', msjChat);
  console.log(`Usuario: ${msjChat[2]} - ${msjChat[1]}
    - ${msjChat[0]}
  `);
}

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arrayNum) {
  if (num % 2 === 0) {
    console.log('Es par: ', num);
  }
}
console.log(arrayNum);

console.log('\n');

console.log(' ---------- PASS BY VALUE / PASS BY REFERENCE ---------');

//PASS BY VALUE / PASS BY REFERENCE
let puedeCambiar = 'Hola'; //
puedeCambiar = 'Chau';

const MI_CONST = 'lalaa'; // VARIABLE tipo VALUE - "lalaa";

const MI_ARRAY = [1, 2, 3]; // VARIABLE DEL TIPO REFERENCIAL - 0x21321513215
MI_ARRAY.push(4);
MI_ARRAY.push(5);
MI_ARRAY = [1, 2, 3, 4, 5, 6]; //0x321321584654

console.log(MI_ARRAY);
