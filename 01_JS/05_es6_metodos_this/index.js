//!Valores por default en FUNCIONES
console.log('------ Valore por default en Parametros ----');
console.log('\n ');

const sum = (a, b) => {
  return a + b;
};

console.log('[FUNC SUM EL PROBLEMA]', sum(5));

console.log('\n ');

const sum2 = (a = 1, b = 0) => {
  return a + b;
};

console.log('[FUNC SUM LA SOLUCION]', sum2(5));

console.log('\n ');
console.log('------ SPREAD ----');

//SPREAD = EXPANDIR
///La sintaxis extendida o spread sintax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de  función) ó elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.

//SPREAD CON ARRAYS
let arr1 = [1, 2, 3, 4, 5]; //0x123123123124124
let arr2 = [6, 7, 8, 9, 10];
let todoJunto = [...arr1, ...arr2];
console.log('[todoJunto]', todoJunto);

let copyArray = [...arr1];
copyArray.push(10);

console.log(arr1);
console.log(copyArray);

//SPREAD CON STRING
let soyUnString = 'Hola como estas';
let soyArrDeString = [...soyUnString];

console.log(soyArrDeString);

//SPREAD CON OBJ

const auto = {
  ruedas: 4,
  carroceria: 'metal',
  motor: true,
};

const sedan = {
  ...auto,
  puertas: 4,
  tipo: 'familiar',
};

const ford = {
  ...sedan,
  marca: 'Ford',
};

let chevy = {
  ...ford,
  combustible: 'nafta',
  marca: 'chevrolet',
};

chevy = {
  ...chevy,
  puertas: 3,
};

console.log(chevy);

const orden = {
  id: 'ñalshdpsadkjhasdjgha4209834s',
  monto: 500,
  direccion: {
    calle: 'Rivadavia',
    numero: 123,
  }, //0x0012
}; //0x0001

const copyOrden = {
  ...orden,
}; //0x0002

console.log('[Check copia de orden]', copyOrden === orden);

console.log(
  '[Y el objeto direccion????]',
  copyOrden.direccion === orden.direccion
);

const copyOrden2 = {
  ...orden,
  direccion: {
    ...orden.direccion,
  },
};

console.log(
  '[Y AHORA???? el objeto direccion????]',
  copyOrden2.direccion === orden.direccion
);

console.log('\n ');
console.log('------ REST ----');

function imprimirArgumentos(a, b, c) {
  console.log(arguments);
  console.log(a);
  console.log(b);
  console.log(c);
}
//imprimirArgumentos("hola", "hello", "Privet", "hola2");

function imprimirArgumentos2() {
  let arg = Array.from(arguments);
  arg.forEach((saludo) => {
    console.log(saludo);
  });
}

// imprimirArgumentos2(
//   "hola",
//   "hello",
//   "Privet",
//   "hola2",
//   "laksjdlkasjd",
//   "alsdjalisjd",
//   "laskjdlaksjd"
// );

//REST OPERATOR
const imprimirSaludos = (...args) => {
  console.log(args);
  for (const saludos of args) {
    console.log(saludos);
  }
};

imprimirSaludos(
  'hola',
  'hello',
  'Privet',
  'hola2',
  'laksjdlkasjd',
  'alsdjalisjd',
  'laskjdlaksjd'
);

const sumatoria = (...args) => {
  return args.reduce((a, b) => a + b);
};

console.log(
  sumatoria(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)
);

console.log('\n ');
console.log('------  Destructuring arrays/Object ----');
//DESTRUCTURANTE array/obj == Destructuring arrays/obj
let marvel = [
  'Iron Man',
  'Capitan America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Falcon',
];

//Lectura de valores de los arrays (Tradicional)
// let ironMan = marvel[0];
// let capi = marvel[1];

let [iroMan, capi, hulk, falcon] = marvel;
console.log(iroMan);
console.log(capi);
console.log(hulk);
console.log(falcon);

const book = {
  autor: 'J.R.R Talkien',
  titulo: 'El Señor De Los Anillos',
  tapa: 'dura',
  medida: {
    alto: 50,
    ancho: 150,
  },
};

const {
  titulo,
  autor,
  tapa: formato,
  medida: { alto },
} = book;

console.log(titulo);
console.log(autor);
console.log(formato);
console.log(alto);

// console.log(tapita);
// console.log(altura);

//SHORT HAND PROPERTIES

const estadisticas = (arr) => {
  //paso1                        //paso1
  const max = Math.max(...arr); // Math.max([5,1,10,11,38,10,60]) -> Math.max(...[5,1,10,11,38,10,60])-> Math.max(5,1,10,11,38,10,60)-> 60
  const min = Math.min(...arr);
  const sum = arr.reduce((acc, currentValue) => acc + currentValue);
  const promedio = sum / arr.length;
  return {
    max,
    min,
    sum,
    promedio: parseFloat(promedio.toFixed(2)),
  };
};
console.log(estadisticas([5, 1, 10, 11, 38, 10, 60]));

//Computed Properties
const AsignacionDinamicaDePropiedad = 'lorenzolamas';
const ValorDinamicoDeLaPropiedadDinamica = 'El Renegado';

const obj = {
  admin: ValorDinamicoDeLaPropiedadDinamica,
};

// console.log("[obj]", obj);
// console.log("[LOG]", empleado);
// function emple(str) {
//   console.log("[FUNC]", str);
// }
// emple(empleado);
// const team = {};
// //team[role] = empleado;
// team[role] = empleado;

const team2 = {
  [AsignacionDinamicaDePropiedad]: ValorDinamicoDeLaPropiedadDinamica,
};

console.log('[Obj team2]', team2);
console.log('[Obj team2.lorenzolamas]', team2.lorenzolamas);

console.log('\n ');

console.log('\n ');
console.log('------  Metodos Objetos ----');

const doMath = {
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.dir(doMath);
console.log(doMath.multiplicar(5, 5));
console.log(doMath.sumar(5, 5));
console.log(doMath.restar(5, 5));
console.log(doMath.dividir(5, 5));

const doMathV2 = {
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
  multiplicar(a, b) {
    return a * b;
  },
  dividir(a, b) {
    return a / b;
  },
};

// THIS - hace referencia al scope de su contexto de ejecucion
// a veces hace referencia al scope global (browser = window / Node = Global), pero otras vece no es asi, sino que hace referencia a el objeto que lo contiene
//Pero tampoco esto es una regla general, sino que puede cambiar dependiedo  el contexto de ejecucion.

function fn() {
  console.log(this);
}

const perro = {
  sonido: 'GUAF GUAF',
  ladrar: () => {
    console.log(this.sonido);
  },
};

perro.ladrar();

const alumno = {
  nombre: 'Victor',
  apellido: 'Calabro',
  notas: {
    algebra: 5,
    filosofia: 10,
    literatura: 10,
    javascript: 6,
  },
  nombreCompleto() {
    let { nombre, apellido } = this;
    return `${nombre} ${apellido}`;
  },
  promedio() {
    let materias = Object.keys(this.notas); //=> ["algebra","filosofia","literatura","javascript"]

    return (
      materias
        .map((materia, index) => {
          return this.notas[materia];

          //console.log(this.notas[materia])
          //console.log(this.notas["javascript"]) -> 6
          // console.log("Inicia Iteracion -> ", index + 1);
          // console.log("Materia es ->", materia);
          // console.log(
          //   "console.log(this.notas[materia])  =  ",
          //   `console.log(this.notas["${materia}"])`
          // );
          // console.log(
          //   `console.log(this.notas["${materia}"])`,
          //   `el valor es -> ${this.notas[materia]}`
          // );
          // console.log("Fin Iteracion->", index + 1);
          // console.log("\n");
        })
        .reduce((acc, valorActual) => {
          return acc + valorActual;
        }) / materias.length.toFixed(2)
    );
  },

  printPresentacion() {
    console.log(
      `El alumno ${this.nombreCompleto()} tiene un promedio de ${this.promedio()}`
    );
  },
};
