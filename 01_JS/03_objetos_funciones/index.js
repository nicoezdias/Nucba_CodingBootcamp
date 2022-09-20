//OBJETOS - Son un conjuto de valores pero estructura Llave - valor
console.log('------ OBJETOS ------- \n');
/*
  {
    llave:valor,
    key:value
  }
*/
//Con la clase Obj
const obj = new Object();

//Objetos literales
const obj2 = {};

const persona = {
  nombre: 'Carlos',
  apellido: 'Diaz',
  edad: 26,
};

console.log('Notacion de punto -- dot notation');
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log('\n');
console.log('Notacion de corchetes -- bracket notation');
console.log(persona['nombre']);
console.log(persona['apellido']);
console.log(persona['edad']);
console.log('\n');

//SUPON - que obtenemos un valor de un input del html
let miInput = 'edad';

const colores = {
  rojo: '#eb4d4b',
  amarillo: '#f9ca24',
  azul: '#30336b',
};

console.log('\n');
let colorInput = 'azul';

console.log(persona.nombre);

console.log(persona[miInput]);
console.log(colores[colorInput]);

console.log('----- FOR IN -----');
for (let propiedad in colores) {
  console.log('propiedad -> ', propiedad);
  console.log('valor -> ', colores[propiedad]);
}

const chatArrayDeObj = [
  {
    usuario: 'Andre',
    msj: 'Holis!',
    hora: '10:35',
  },
  {
    usuario: 'Franco',
    msj: 'Hola andre!!',
    hora: '10:36',
  },
  {
    usuario: 'Andre',
    msj: 'Amo los objetos en JS',
    hora: '10:37',
  },
];

for (let msjChat of chatArrayDeObj) {
  /*
  Itera1 -> mejsChat = {
    usuario: 'Andre',
    msj: 'Holis!',
    hora: '10:35',
  }
  
  Itera2 -> mejsChat =  {
    usuario: 'Franco',
    msj: 'Hola andre!!',
    hora: '10:36',
  }

  Itera2 -> mejsChat = {
    usuario: 'Andre',
    msj: 'Amo los objetos en JS',
    hora: '10:37',
  } 
  */

  //msj = ['val1','val2', 'val']
  //console.log('[FOR OF]: ', msjChat);
  console.log(`Usuario: ${msjChat.usuario} - ${msjChat.msj}
      - ${msjChat.hora}
    `);
}

const alumno = {
  nombre: 'Caro',
  apellido: 'Morel',
  materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
  tel: {
    celular: 11111111,
    casa: 123123123132,
  },
  direccion: {
    calle: 'Rivadavia',
    numero: 123,
  },
  recursa: false,
};

console.log(alumno.materias);
console.log(alumno.tel);

console.log('\n');
console.log('------ ARRAY DE OBJ ALUMNO -------');
//ARRAY DE OBJ ALUMNO

const ARRAY_DE_ALUMNOS = [
  {
    nombre: 'Caro',
    apellido: 'Morel',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: false,
  },
  {
    nombre: 'Victor',
    apellido: 'Calabro',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: true,
  },
  {
    nombre: 'Carlos',
    apellido: 'Diaz',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: true,
  },
  {
    nombre: 'Andre',
    apellido: 'Reyes',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: false,
  },
  {
    nombre: 'Facu',
    apellido: 'Di Pietrantonio',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: false,
  },
  {
    nombre: 'Ivan',
    apellido: 'Poczter',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: false,
  },
  {
    nombre: 'Juan',
    apellido: 'Martinez',
    materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
    tel: {
      celular: 11111111,
      casa: 123123123132,
    },
    direccion: {
      calle: 'Rivadavia',
      numero: 123,
    },
    recursa: true,
  },
];

// for (const alumno of ARRAY_DE_ALUMNOS) {

// /*
// ITER1 -> alumno =   {
//     nombre: 'Caro',
//     apellido: 'Morel',
//     materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
//     tel: {
//       celular: 11111111,
//       casa: 123123123132,
//     },
//     direccion: {
//       calle: 'Rivadavia',
//       numero: 123,
//     },
//     recursa: false,
//   }

// */    //false

// // if(false) ---> false

// // if(3 > 2) ->> true /false
//   if (alumno.recursa) {
//     console.log(
//       `Alumne: ${alumno.nombre} ${alumno.apellido} - Recursa materias`
//     );
//   } else {
//     console.log(
//       `Alumne: ${alumno.nombre} ${alumno.apellido} - No Recursa materias`
//     );
//   }
// }

/* condicional -> true / false
0 -> false
[] ->

if(condicional){

}

*/

for (const alumno of ARRAY_DE_ALUMNOS) {
  /*
    ITER1 -> alumno =   {
        nombre: 'Caro',
        apellido: 'Morel',
        materias: ['Algebra', 'Analisis', 'Quimica', 'Fisica'],
        tel: {
          celular: 11111111,
          casa: 123123123132,
        },
        direccion: {
          calle: 'Rivadavia',
          numero: 123,
        },
        recursa: false,
      }
    */ //false
  // if(false) ---> false
  // if(3 > 2) ->> true /false
  if (alumno.recursa) {
    console.log(
      ` Alumne: ${alumno.nombre} ${alumno.apellido}
      Recursa materias - llamar a los telefonos: ${alumno.tel.celular}
      Materias: ${alumno.materias.join(' - ')} \n`
    );
  } else {
    console.log(
      ` Alumne: ${alumno.nombre} ${alumno.apellido}
      No Recursa materias
      Materias: ${alumno.materias.join(' - ')} \n`
    );
  }
}
console.log('\n');
// for (const alumno of ARRAY_DE_ALUMNOS) {
//   if (alumno.recursa) {
//     console.log(`Alumne: ${alumno.nombre} ${alumno.apellido} -recursa materias porque le gusta la vagancia
//         llamar a su casa: ${alumno.tel.casa}
//         llamar a su celular: ${alumno.tel.celular}`);
//   } else {
//     console.log(
//       `Alumne: ${alumno.nombre} ${alumno.apellido} - no recursa materias porque la tiene atada`
//     );
//   }
//}

console.log('\n');

console.log('---------FUNCIONES----------');
//FUNCIONES
//DEF: Un bloque de reutilizable de codigo.

//Las funciones tienen
//1) la declaracion de la funcion
//2) Correr / llamar (run / call) la funcion.
//Call a function / run a function.

//DECLARAR FN
function fn() {}

//Declaramos la funcion
function tresConsolas() {
  console.log('Hola');
  console.log('Nucbers');
  console.log('Como estan?');
}

//Ejecutamos la funcion o llamamos la funcion o corremos la funcion
tresConsolas();

function dadoRandom() {
  let numero = Math.floor(Math.random() * 6) + 1;
  console.log(`Dado: ${numero}`);
}

console.log('\n');
//PARAMETROS - Son variables que espera recibir la funcion

function lanzarDado(cantidad) {
  for (let lanzamientos = 0; lanzamientos < cantidad; lanzamientos++) {
    dadoRandom();
  }
}

lanzarDado(5);
/*
function lanzarDado(5) {
  
  
    for (let lanzamientos = 0; lanzamientos < 5; lanzamientos++) {
    dadoRandom();
  }
}

*/

console.log('\n');
lanzarDado(50);
console.log('\n');

//FN de matesss
function cuadro(num) {
  console.log('estoy haciendo un log', num * num);
  //return undefined
}
cuadro(5);

function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}

//first class citizen
sumar(15, 5);
sumar(100, 5);

//LAS FUNCIONES SON FIRST CLASS CITIZEN
const cuadroDe5 = cuadro(5); //undefined
console.log(typeof cuadroDe5);

// RETURN VALUE
function cuadro2(num) {
  return num * num;
}
cuadro(5);

function sumar2(numero1, numero2) {
  return numero1 + numero2;
}

let numerito = cuadro2(4); // 16
let numerito2 = cuadro2; // 16 // FERENCIA
console.log('numerito', numerito);
console.log('numerito2', numerito2(5));
console.log(sumar2(10, 10));

function esRojo(color) {
  if (color.toLowerCase() == 'rojo') {
    //DEVOLVER MAS DE UN VALOR
    return [true, color];
  }
  return { esRojo: false, valorActual: color };
}

let isRed = esRojo('rojo');

//FUNCION QUE VALIDE UN PASSWORD

console.log('\n');
console.log('---- FUNCIONES PARTE 2 ---------');
// 1 - validar que el password sea mayor a 8 caracteres
// 2 - sin espacios en Blanco
// 3 - no puede contener dentro el password el nombre del usuario

/* 
caracteres blancos user  valorReturn
     v       f      f        f
     f       v      f        f
     f       f      v        f
     v       v      f        f
     f       v      v        f
     v       f      v        f
     v       v      v        v
*/

// Estos valores podrian ser obtenidos por un formulario de login
// -input usuario - input password
const usuarioId = 'usuario123';
const password = 'alskdjañlskdjañlskdj';

//v1
function isValidPassword(pass, userId) {
  if (pass.length < 8) {
    return false;
  } else if (pass.includes(' ')) {
    return false;
  } else if (pass.includes(userId)) {
    return false;
  }
  return true;
}

const esValido = isValidPassword(password, usuarioId);

if (esValido) {
  console.log('...ingresando');
} else {
  console.log('Password invalido');
}

console.log('\n');

//V2 isValidPasswordV2

//Operador Ternario y Expresiones Booleanas
let holiss = 'hola';
let holissDos = 'hola';
let miVariable = holiss === holissDos ? 'son iguales' : 'no son iguales';

console.log(miVariable);

const usuarioIdV2 = 'usuario123lasknflasjKNalkjsdnalkSJDNAlksjdn';
const passwordV2 = 'alskdjañlskdjañlskdj';

function isValidPasswordV2(pass, userId) {
  console.log(pass, userId);
  const isValidLength = pass.length >= 8; // TRUE o FALSE
  const hasBlanc = !pass.includes(' '); // TRUE-->FALSE o FALSE-> true
  const hasUserInPassword = !pass.includes(userId); // TRUE-->FALSE o FALSE-> true

  return isValidLength && hasBlanc && hasUserInPassword; // TRUEEEEEE SI Y SOLO SI TODO ES TRUE;
}

const esValidoV2 = isValidPasswordV2(passwordV2, usuarioIdV2)
  ? '...ingresando'
  : 'Password invalido';

console.log(esValidoV2);

//PROMEDIOOOOO
const arrayNotas = [10, 5, 7, 8, 9];

function isArray(value) {
  let checkLength = value.length >= 0 ? true : false;
  let isObj = typeof value === 'object' ? true : false;
  return checkLength && isObj;
}

function promedio(arr) {
  let sumarNotas = 0;
  if (!isArray(arr)) {
    return 'el argumento de la funcion debe ser un Array';
  }
  for (const nota of arr) {
    //sumarNotas = sumarNotas + nota
    sumarNotas += nota;
  }
  return sumarNotas / arr.length;
}

const promedioFinal = promedio('lasjhdlaksjdhalkjdhaksjdhak'); // string o number;

const mensajeNota =
  typeof promedioFinal === 'number'
    ? `Tu Promedio es ${promedioFinal}`
    : 'Ups! hubo un error';

console.log(mensajeNota);

console.log('\n');
console.log(
  '---- FUNCTION EXPRESSION -  ARROW FUNCTIONS - CALLBACKS  ---------'
);
//FUNCTION EXPRESSION - una funcion anonima asignada a una variable con palabra reservada function

const miFn = function () {
  console.log('Eyyy yo tambien soy una funcion');
};
miFn();

console.log('\n');

//ARROW FUNCTION EXPRESSION - una funcion anonima asignada a una variable con palabra reservada function

const miFn_arrow = () => {
  console.log(
    'Eyyy yo tambien soy una funcion, pero soy arrow soy cheta soy cool...'
  );
};
miFn_arrow();

//Version con return manual
const multiplicar = (a, b) => {
  return a * b;
};
console.log(multiplicar(5, 5));

//Version con return implicito
const multiplicar_v2 = (a, b) => a * b;

console.log(multiplicar_v2(5, 5));

const sumar_v2 = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;

const mathOperations = [multiplicar, sumar_v2, restar, dividir];

console.log('[MathOperation]', mathOperations[3](25, 5));

for (const fn of mathOperations) {
  console.log('[resultado]', fn(25, 5));
}

//CALLBACK
//Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
function isFunction(value) {
  let isFnValid = typeof value === 'function' ? true : false;
  return isFnValid;
}

const doMath = (num, num2, cb) => {
  if (!isFunction(cb)) {
    return 'Error el cb debe ser una funcion';
  }
  return cb(num, num2);
};

console.log('[Do Math ****]', doMath(dividir, 2000, 4));
console.log('[Do Math]', doMath(2000, 1000, restar));
console.log('[Do Math]', doMath(2000, 2000, sumar_v2));
console.log('[Do Math]', doMath(2000, 10, multiplicar_v2));
console.log('[Do Math]', doMath(2000, 10, isFunction));

// doMath(25,5){
//   if(!isFunction(dividir)){ //-> !true -> False
//     return 'Error el cb debe ser una funcion'; // NO ENTRA
//   }
//   return dividir(num, num2);
// }

//CLOSURES
//MALA IDEA
// const multiplicarPor10 = (num) => num * 10;
// const multiplicarPor5 = (num) => num * 5;

//BUENA IDEA
const multiplicarBy = (num) => {
  let numeroRecordado = num;
  return (otroNumero) => {
    return numeroRecordado * otroNumero;
  };
};
const multiplicarPor10 = multiplicarBy(10);

console.log('\n');
