//INTRO OOP EN JS

//?Como creamo Objetos en JS....

//! Objects Literals

const user1 = {
  name: 'Victor',
  score: 0,
  increment: function () {
    user1.score++;
  },
  lessScore: function () {
    user1.score--;
  },
};
console.log(user1);
user1.increment();
console.log(user1);

//! Objects dot Notation

const user2 = {};

user2.name = 'Facu'; // SI name existe -> lo va a actualizar / Si name No existe -> lo crea.
user2.score = 0;
user2.increment = function () {
  user2.score++;
};

console.log('\n');
console.log(user2);
user2.increment();
console.log(user2);
console.log('\n');

//? ALERT!!!!! NUEVA SINTAXIS!!!!!!!!!!!!!!

const user3 = Object.create(null);

user3.name = 'Andre'; // SI name existe -> lo va a actualizar / Si name No existe -> lo crea.
user3.score = 0;
user3.increment = function () {
  user3.score++;
};

console.log('\n');
console.log(user3);
user2.increment();
console.log(user3);
console.log('\n');

//? QUE PRINCIPIO DE LA PROGRAMACION ESTAMOS ROMPIENDO????????????????

//?DRY !!!!!!!!!

//? COMO RESOLVEMOS ESTO??? CREAMO UNA FUNCION!!!!!!  -- (Facu Baila)

function crearUsuario(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  newUser.decrement = function () {
    newUser.score--;
  };
  return newUser;
}

const user4 = crearUsuario('Carlos', 0);
const user5 = crearUsuario('Ramon', 0);

console.log('\n');
console.log(user4);
console.log(user5);
console.log('\n');

// {} === {} //FALSE
// ()=> {} === ()=> {}  //FALSE
// [] === [] //FALSE

//?Quien Nos salva????????? el PROTOTYPE CHAIN

const userMethods = {
  increment: function () {
    this.score++;
  },
};

function crearUsuario2(name, score) {
  const newUser = Object.create(userMethods);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const user6 = crearUsuario2('Alicia', 0);

//?FUNCTION ARE OBJECTS!!

function createUser3(name, score) {
  const newUser = Object.create();
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

createUser3.prototype.increment = function () {
  this.score++;
};

const user7 = crearUsuario2('Manu', 0);
const user8 = crearUsuario2('Rama', 0);

console.log('\n');
user7.increment();
console.log(user7);
console.log(user8);
console.log('\n');

//?Notacion de Clase (ES5) - New Keyword

function CreateUser4(name, score) {
  //const newUser = Object.create(createUser3.prototype);
  this.name = name;
  this.score = score;
  //return newUser;
}

CreateUser4.prototype.increment = function () {
  function add() {
    this.score++;
  }
  //? Con Call

  add.call(this);
  //? Con Apply
  //   add.apply(this);
  //? Con Apply
  //   let addBind = function () {
  //     this.score++;
  //   }.bind(this);

  //   addBind();
  //? Con ARROW functions

  //   let addArrow = () => {
  //     this.score++;
  //   };
  //   addArrow();
};

CreateUser4.prototype.decrement = function () {
  this.score--;
};

CreateUser4.prototype.log = function () {
  console.loog(this.name);
};

const user9 = new CreateUser4('Manu', 0);
const user10 = new CreateUser4('Rama', 0);

console.log('\n');
debugger;
user7.increment();
console.log(user9);
console.log(user10);
console.log('\n');

//? CALL - APPLY - BIND

function lala(param, parm2) {
  console.log(this);
  console.log('lala', this.name, param, parm2);
}

let myObj = {
  name: 'Facu',
};

lala('hola', 'lolo');
console.log('CALL');
lala.call(myObj, 'hola', 'lolo');
console.log('APPLY');
lala.apply(myObj, ['hola', 'lolo']);

let bindLala = lala.bind(myObj, 'hola', 'lolo');
console.log('BIND');
bindLala();

//? Herencia ES5

// Animal4PatasYpelo
//     patas 4
//     pelos
//         //Perro
//             ladra
//         //Gato
//             maulla
//         //caballo
//             relincha
//         //Vaca
//             muje

//
function CreateUserAdmin(name, score, editmode) {
  CreateUser4.call(this, name, score);
  this.editmode = editmode;
}
CreateUserAdmin.prototype = Object.create(CreateUser4.prototype);
CreateUserAdmin.prototype.constructor = CreateUserAdmin;

const user11 = new CreateUserAdmin('Lorenzo', 0, true);
user11.increment();
user11.increment();
user11.decrement();

console.log('\n');
console.dir(user11);
console.log('\n');

//? Class ES6

class CreateUser5 {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  decrement() {
    this.score--;
  }
  log() {
    console.log(this.name);
  }
}

const user12 = new CreateUser5('Pedrito', 10);
console.log(user12);

class CreateUserAdmin2 extends CreateUser5 {
  constructor(name, score, editmode) {
    super(name, score); // Esto va a llamar al metodo constructor de la clase padre
    this.editmode = editmode;
  }
}
