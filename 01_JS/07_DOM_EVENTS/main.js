/*
DOM -> Document Object Model
- Es una representacion en JS de una pagina WEB
- Es un monton de objetos con lo que podemos interactuar con JS
*/

//SELECCION DE ELEMENTOS DE DOM

//documento.getElementById()
// Nos trae el elemento que tenga ese ID

const myH1 = document.getElementById('titulo');
console.dir(myH1.innerText);

const myP = document.getElementById('text');
console.dir(myP);

const myPs = document.getElementsByTagName('p');
console.dir(myPs);

const myPsArray = Array.from(myPs);

myPsArray.forEach((p) => console.log(p.innerText));

for (const p of myPs) {
  console.log('[forOf]');
  console.dir(p);
}

const inputs = document.getElementsByTagName('input');
console.dir(inputs);

for (const input of inputs) {
  input.value = '1';
}

const a = document.getElementsByTagName('a');
console.dir(a);

const myUl = document.querySelector('#ul_1');
const li = myUl.querySelector('.cheto');
//Te trae el primero que encuentra
console.dir(li);
const lis = myUl.querySelectorAll('.cheto');
console.dir(lis);

//innerHTML -> nos devuelve un string del html dentro de un elemento
console.log(myUl.innerHTML);

const ulHeroes = document.querySelector('#heroes');

console.dir(ulHeroes);

setTimeout(() => {
  for (let index = 0; index < 50; index++) {
    ulHeroes.innerHTML += `<li>Hulk ${index}</li>`;
  }
}, 2000);

//Atributos
const inputs2 = document.querySelectorAll('form input');
console.dir(inputs2[3].getAttribute('max'));
console.dir(inputs2[3].getAttribute('min'));
console.dir(inputs2[3].getAttribute('miAtributoCustom'));

const a2 = document.querySelector('.more a');
const img = document.querySelector('.more img');

console.log(a2.href);
console.log(img.src);

//PARENT / CHILDREN / SIBILING

console.log(
  inputs2[0].nextElementSibling.nextElementSibling.previousElementSibling
);
console.log(inputs2[0].parentElement);
console.log(inputs2[1].parentElement);
console.log(inputs2[2].parentElement);
console.log(inputs2[3].parentElement);

const myForm = document.forms.formCheto;
console.log(myForm);

//Stylesss
// const todo = document.querySelector('.todo');
// todo.style.color = 'grey';
// todo.style.opacity = '50%';
// todo.style.textDecoration = 'line-through';

// todo.classList.add('realizado');
// todo.classList.remove('realizado');
// todo.classList.toggle('realizado');

const myLiElement = document.createElement('li');
myLiElement.classList.add('todo');
myLiElement.innerText = 'Comprar Vino';

const myLiElement2 = document.createElement('li');
myLiElement2.classList.add('todo');
myLiElement2.innerText = 'Comprar Salamin';

const ulTodos = document.querySelector('#todos');

ulTodos.append(myLiElement, myLiElement2);

setTimeout(() => {
  myLiElement2.remove();
}, 3000);

//EVENTOS INTROOOO

function log(event) {
  console.log(event.target);
  console.log('click en el boton');
}
const body = document.querySelector('body');

const MyButton = document.createElement('button');
MyButton.innerText = 'Click me!';
MyButton.classList.add('myButton');

body.append(MyButton);

MyButton.addEventListener('click', log);

const liTodos = document.querySelectorAll('#todos .todo');

for (const li of liTodos) {
  li.addEventListener('click', realizado);
}

function realizado(evento) {
  let li = evento.target;
  li.classList.toggle('realizado');
}
