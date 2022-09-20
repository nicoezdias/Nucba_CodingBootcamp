let myObjButton = {
  innerText: 'My Button',
};

// function handler(evento, cb) {
//   cb(evento);
// }

// function log(algo) {
//   console.log(algo);
// }

myObjButton.onclick = () => {
  console.log('lalala');
};

console.dir(myObjButton);

const app = document.getElementById('app');

app.innerHTML = `
    <h1> Dom events </h1>
    <form name="cheto">
      <label>
        Nombre
        <input type="tex" name="fullname" />
      </label>
      <label>
        Ingresar
        <input type="email" name="emailCheto" />
      </label>
      <label>
        <input type="checkbox" name="terms" />Terminos y condiciones
      </label>
      <div class="container">
        <label>
          Azul
          <input type="radio" name="color" value="azul" checked />
        </label>
        <label>
          Verde
          <input type="radio" name="color" value="verde" />
        </label>
        <label>
          Rojo
          <input type="radio" name="color" value="rojo" />
        </label>
      </div>
      <label>
        <select name="bebidas" style="width:100px; heigth:100px">
          <option value="">seleccionar</option>
          <option value="cerveza" selected>Birra 🍺</option>
          <option value="vino">Vino 🍷</option>
          <option value="whisky">whisky 🥃 </option>
        </select>
      </label>
    </form>
    <button type="button" id="idbotton" class="btn" data-nombre-boton="miBoton">Click</button>
    <br>
    <button type="button" id="idbotton2" class="btn" data-nombre-boton="miBoton">Click</button>
    <!--Event propagation -->
    <div class="uno">
        <div class="dos">
            <button type="button" class="btn btn-violet tres">Click</button>
        </div>
    </div>

    <!-- Prevent Default -->
    <form >
        <label>
            Ingresar
            <input type="email" name="email">
        </label>
        <label>
            <input type="checkbox">Terminos y condiciones
        </label>
    </form>

    <!-- Event Delegation -->
    <div class="list-container">
        <button type="button" class="btn" id="addItem">Agregar</button>
        <ul id="list">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
        </ul>
    </div>
    
`;

//EVENTO PART 2
// 1) Seleccionar elemento
const button = document.querySelector('#idbotton');
console.log(typeof button);
console.dir(button);
//2) agregamos el evento al elemento seleccionadooooo

button.onclick = () => {
  console.log('YEaaaaahhhhh capturaste tu primer eventoooooooo!!!!!!');
};

button.onclick = () => {
  console.log('JAJAJA TE BORRE!');
};

//! Agregar evento de manera correcta!
//? elementoHTML.addEventListener('<nombre del evento>',cb/handler)

const handlerClickButton = (evento) => {
  console.log(evento.target);
  console.log('Super Click');
};

// const handlerClickButton2 = () => {
//   console.log('Super Click2');
// };
// const handlerClickButton3 = () => {
//   console.log('Super Click3');
// };
// const handlerClickButton4 = () => {
//   console.log('Super Click4');
// };
button.addEventListener('click', handlerClickButton);

// button.addEventListener('click', handlerClickButton2);
// button.addEventListener('click', handlerClickButton3);
// //Este no va a correr
// button.addEventListener('click', handlerClickButton4);

// button.removeEventListener('click', handlerClickButton4);

//!Event Bubblig - Caputuring - Propagation

const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');

const handlerClickEventPropa = (evento) => {
  evento.stopPropagation();
  console.log(evento);
};

uno.addEventListener('click', handlerClickEventPropa);
dos.addEventListener('click', handlerClickEventPropa);
tres.addEventListener('click', handlerClickEventPropa);

//!preventDefault()
const form = document.querySelector('form');
const email = form.querySelector('input[type="email"]');
const checkbox = form.querySelector('input[type="checkbox"]');

const handlerSubmit = (evento) => {
  const panterior = form.querySelector('p');
  if (panterior) {
    panterior.remove();
  }
  evento.preventDefault();
  const p = document.createElement('p');
  p.style.color = 'white';

  if (!checkbox.checked) {
    p.innerText = 'Tienes que aceptar terminos y condiciones';
    form.append(p);
    return;
  }
  p.innerText = 'se envio el email a: ' + email.value;
  form.append(p);
};

form.addEventListener('submit', handlerSubmit);

//EVENT DELEGATION!!! YEAAAAA

const list = document.querySelector('#list');
const items = [...list.querySelectorAll('li')];
const addButton = document.querySelector('#addItem');

const handlerClickList = (e) => {
  if (e.target.nodeName.toLowerCase() === 'ul') {
    return;
  }
  console.log(e.target.innerText);
};

const handlerAddItem = () => {
  const items = [...list.querySelectorAll('li')];
  const li = document.createElement('li');
  li.innerText = `Item${items.length + 1}`;
  list.appendChild(li);
};

list.addEventListener('click', handlerClickList);
addButton.addEventListener('click', handlerAddItem);

//?Una mejor manera de seleccionar formularios

const formCheto = document.forms.cheto;
console.dir(formCheto);

// const emailCheto = formCheto.elements.emailCheto;
// const fullname = formCheto.elements.fullname;

const { emailCheto, fullname, terms, color, bebidas } = formCheto.elements;
const obj = {
  name: 'lala',
  apellido: 'lolo',
};

// const name = obj.name
// const apellido = obj.apellido
const { name, apellido } = obj;

console.log(emailCheto);
console.log(fullname);

console.log(name);
console.log(apellido);

const inputHandler = (evento) => {
  console.log('[EVENT TYPE]', event.type);
  let valueInput = evento.target.value;
  console.log(valueInput);
};
//ENVENTO CHANGE
fullname.addEventListener('change', inputHandler);
//ENVENTO INPUT
fullname.addEventListener('input', inputHandler);
//ENVENTO FOCUS
fullname.addEventListener('focus', inputHandler);
//ENVENTO BLUR
fullname.addEventListener('blur', inputHandler);

terms.addEventListener('change', (evento) => {
  console.log(evento.target.checked);
});
emailCheto.focus();

const colorArray = [...color];

formCheto.addEventListener('click', (evento) => {
  if (evento.target.type !== 'radio') {
    return;
  }
  console.log(evento.target.value);
});
colorArray[2].click();

console.dir(bebidas);
bebidas.addEventListener('change', (evento) => {
  console.log(evento.target.value);
  console.log(evento.target.innerText);
});
