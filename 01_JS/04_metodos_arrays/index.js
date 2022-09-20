console.log('---- METODOS BASICOS DE LOS ARRAYS ---------');
//METODOS BASICOS DE LOS ARRAYS

//IndexOf
let array_3 = [500, 600, 'no', 600];
console.log(array_3.indexOf(700));

if (array_3.indexOf(700) === -1) {
  console.log('no ta');
} else {
  console.log('Yeaaa eta');
}

console.log(array_3[0]);

//includes
let array_4 = [500, 600, 'no', 600];
console.log(array_4.includes(700));

if (!array_4.includes('no')) {
  console.log('no ta');
} else {
  console.log('Yeaaa eta');
}

//SPLICE - (indexstar, indiceABorrar, nuevoValor)
let array_5 = ['hola', 'soy', 'un', 'perro'];
let array_5_valor_reemplazado = array_5.splice(3, 3, 'gato');

console.log(array_5);
console.log(array_5_valor_reemplazado);

//SLICE

let array_6 = ['hola', 'soy', 'un', 'perro'];
let slice_array_6 = array_6.slice(0, 3);

console.log(array_6);
console.log(slice_array_6);

//CONCAT

let array_7 = ['hola', 'soy', 'un', 'perro'];
let array_8 = ['hola', 'soy', 'un', 'gato'];
let concat_array_7_array_8 = array_7.concat(array_8);

console.log(array_7);
console.log(array_8);
console.log(concat_array_7_array_8);

//CONCAT

let array_9 = ['hola', 'soy', 'un', 'perro'];
let array_to_string = array_9.join(' ');

console.log(array_to_string);

//! METODOS ARRAYS CON CALLBACKS
console.log('\n');
console.log('---- METODOS DE LOS ARRAYS CON CALLBACKS---------');

//?Metod 1 - FOREACH
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function logear(cuurentValue, index) {
//   console.log('Valor: ', cuurentValue);
//   console.log('index: ', index);
//   //   console.log('Array completo: ', pepe);
// }

// const logear = (cuurentValue, index) => {
//   console.log('Valor: ', cuurentValue);
//   console.log('index: ', index);
//   //   console.log('Array completo: ', pepe);
// };

//numeros.forEach(logear);

numeros.forEach((cuurentValue, index) => {
  console.log('Valor: ', cuurentValue);
  console.log('index: ', index);
});

// let str1 = 'Hola';
// let str2 = 'Facu';
// let str3 = 32;
// let todoJunto = str1 + ' ' + str2;
// let todoJunto2 = str1 + ' ' + str2 + ' ' + str3;
// let todoJunto3 = `${str1}
//  --------
// ${str2}
//  ----------

// ${str3 * 2}`;

// console.log(todoJunto3);

numeros.forEach((currentValue, index) => {
  console.log(
    `${currentValue === 1 ? 'uno' : currentValue}  x 2 = `,
    currentValue * 2
  );
});

// for (let index = 0; index < numeros.length; index++) {
//   console.log('Valor: ', numeros[index]);
//   console.log('index: ', index);
// }

//FUNCIONA CON LOS ITERABLES!!!! NO SOLO CON ARRAYS
// for (const valor of numeros) {
//   console.log('Valor: ', valor);
// }

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

// ARRAY_DE_ALUMNOS.forEach((alumno) => {
//   if (alumno.recursa) {
//     console.log(
//       ` Alumne: ${alumno.nombre} ${alumno.apellido}
//           Recursa materias - llamar a los telefonos: ${alumno.tel.celular}
//           Materias: ${alumno.materias.join(' - ')} \n`
//     );
//   } else {
//     console.log(
//       ` Alumne: ${alumno.nombre} ${alumno.apellido}
//           No Recursa materias
//           Materias: ${alumno.materias.join(' - ')} \n`
//     );
//   }
// });

ARRAY_DE_ALUMNOS.forEach((alumno) => {
  let textoAlumne = alumno.recursa
    ? ` Alumne: ${alumno.nombre} ${alumno.apellido}
            Recursa materias - llamar a los telefonos: ${alumno.tel.celular}
            Materias: ${alumno.materias.join(' - ')} \n`
    : ` Alumne: ${alumno.nombre} ${alumno.apellido}
            No Recursa materias
            Materias: ${alumno.materias.join(' - ')} \n`;
  console.log(textoAlumne);
});

console.log('\n');
console.log('-----------MAP-------------');
//FIRMA DE LA FUNCION
//let nuevo_array = arr.map(function callback(currentValue, index, array) {
// Elemento devuelto de nuevo_array
//}[, thisArg])

let saldos = [500, 9, 321, 200, 110, 1200];

let numero2 = saldos.map((currentValue) => {
  return { saldo: currentValue * 2 };
});

let stringHTML = saldos.map((currentValue) => {
  return `<li>valor - ${currentValue}</li>`;
});

let lista = `<ul> ${stringHTML.join('')} </ul>`;
console.log(lista);

let arrayObjs = saldos.map((currentValue) => {
  return { valor: currentValue, esPar: currentValue % 2 === 0 };
});

console.log(arrayObjs);

console.log('\n');
console.log('-----------FIND-------------');
//FIND - devuelve el primer valor que encuenta que satisface la logica que le pasamos en el callback

let books = [
  'El hobbit',
  'Narnia',
  'Harry Potter',
  'El señor de los Anillos',
  'Yo Robot',
];

let stringQueObtenemosDeUnaInteraccionDelUsuario = 'El hobbit';

// let book = books.find(
//   (libro) => libro === stringQueObtenemosDeUnaInteraccionDelUsuario
// );

let book = books.find((libro) => libro.includes('El'));

console.log(book);

let books2 = [
  {
    id: 123,
    titulo: 'El hobbit',
  },
  {
    id: 1234,
    titulo: 'Narnia',
  },
  {
    id: 12345,
    titulo: 'Harry Potter',
  },
  {
    id: 123456,
    titulo: 'El señor de los Anillos',
  },
  {
    id: 1234567,
    titulo: 'Yo Robot',
  },
];

let idBook = 12345; // Viene de una interaccion del usuario / servicio web / un fetch a una api, etc!!!!!

let findByID = books2.find((obj) => obj.id === idBook);
console.log(findByID);

console.log('\n');
console.log('-----------FILTER-------------');
// FILTER - devuelve un nuevo array con el/los elementos que cumplan con la logica que pasamos en el callback

let libritos = books.filter((libro) => libro.includes('El'));

console.log(libritos);

let books3 = [
  {
    id: 123,
    title: 'El Hobbit',
    author: 'J.R.R Tolkien',
    genres: ['ciencia ficción', 'aventura'],
  },
  {
    id: 1234,
    title: 'Narnia',
    author: 'C.S Lewis',
    genres: ['ciencia ficción'],
  },
  {
    id: 12345,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    genres: ['ciencia ficción', 'aventura'],
  },
  {
    id: 123456,
    title: 'El Señor de los Anillos',
    author: 'J.R.R Tolkien',
    genres: ['aventura'],
  },
  {
    id: 12345678,
    title: 'Yo Robot',
    author: 'Isaac Asimov',
    genres: ['ciencia ficción', 'aventura'],
  },

  {
    id: 123456789,
    title: 'El último Teorema de Fermat',
    author: 'Simon Singh',
    genres: ['ciencia', 'matemáticas', 'divulgación científica'],
  },
  {
    id: 1234567810,
    title: 'La Puerta equivocada',
    author: 'Adrian Paenza',
    genres: ['ciencia', 'matemáticas', 'divulgación científica'],
  },
  {
    id: 1234567811,
    title: 'Historia del Tiempo',
    author: 'Stephen Hawking',
    genres: ['ciencia', 'física', 'divulgación científica'],
  },
];

//DRY DRY DRY DRY!!! ME ESTOY REPITIENDO!!!
// const getlibronbyid = books3.filter(() => )
// const getlibronbyTitulo = books3.filter(() => )
// const getlibronbyutho = books3.filter(() => )

const getBook = (filtro, valor, arr) => {
  if (filtro !== 'genres') {
    return arr.filter((book) => {
      return book[filtro] === valor;
    });
  } else {
    return arr.filter((book) => {
      return book[filtro].includes(valor);
    });
  }
};

let filtroDeInteraccionDelUsuario = 'genres';
let valoreInteraccionDelUsuario = 'ciencia ficción';

let resultadoBusqueda = getBook(
  filtroDeInteraccionDelUsuario,
  valoreInteraccionDelUsuario,
  books3
);

console.log('Buscando.....');
// setTimeout(() => {
//   console.log('Resultado de la busqueda: \n', resultadoBusqueda);
// }, 5000);

//PEQUEÑO REPASO DE ACCESO  A PROPIEDADEES DE LOS OBJETOS
// let objColor = { rojo: 'red' };

// let propiedad = 'rojo';

// console.log(objColor['rojo']);
// console.log(objColor[propiedad]);

console.log('\n');
console.log('-----------SOME AND EVERY -------------');

let arrayNum = [1, 3, 8, 7, 9];
console.log(
  '[Every :]',
  arrayNum.every((n) => n % 2 === 1)
);
console.log(
  '[Some :]',
  arrayNum.some((n) => n % 2 === 0)
);

let personas = [
  { name: 'Victor', age: 25 },
  { name: 'FAcu', age: 28 },
  { name: 'Ivan', age: 30 },
  { name: 'Caro', age: 29 },
  { name: 'Franco', age: 18 },
  { name: 'Adre', age: 30 },
  { name: 'Carlos', age: 26 },
];

let checkAges = personas.every((persona) => persona.age >= 18);
console.log(checkAges);

console.log('\n');
console.log('----------- SORT -------------');

let arrayString = ['a', 'j', 'b', 'h', 'c'];
console.log(arrayString.sort());

let numerosArray = [2, 0, 1, 8, 9, 11, 3, 75, 90, 101];

console.log(numerosArray.sort());

console.log(numerosArray.sort((a, b) => a - b)); //ORDEN ASCENDENTE
console.log(numerosArray.sort((a, b) => b - a)); //ORDEN DESCENDENTE

console.log('\n');
console.log('----------- REDUCE -------------');

let numerosArray2 = [100, 100, 100, 100, 100];

// let total = numerosArray2.reduce((accumulador, valorActual) => {

// })

let total = numerosArray2.reduce((acc, currentValue) => {
  return acc + currentValue;
});
// console.log('[Con reduce] :', total);

// let total2 = 0;

// for (let numero of numerosArray2) {
//   total2 += numero;
// }

// console.log('[Con ForOf] :', total2);

let numObj2 = [
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
];

// ASI NO FUNCIONA
let total2 = numObj2.reduce((acc, currentValue) => {
  console.log(acc, currentValue.value);
  return acc + currentValue.value;
});

console.log('[Con reduce] :', total2);

// OK FUNCIONA V1

let total3 = numObj2.reduce((acc, currentValue) => {
  console.log(acc, currentValue.value);
  return acc + currentValue.value;
}, 0);

console.log('[Con reduce] :', total3);

// OK FUNCIONA V2

let total4 = numObj2.reduce((acc, currentValue) => {
  console.log(acc, currentValue.value);
  return { value: acc.value + currentValue.value };
});

console.log('[Con reduce] :', total4);

// OK FUNCIONA V3

let total5 = numObj2.reduce(
  (acc, currentValue) => {
    console.log(acc, currentValue.value);
    return { totalSuma: acc.totalSuma + currentValue.value };
  },
  { totalSuma: 0 }
);

console.log('[Con reduce] :', total5);
