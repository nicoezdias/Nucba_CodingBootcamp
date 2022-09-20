const app = document.querySelector('#app');

app.innerHTML = `
    <div class="todos">
        <div class="todos-header">
            <h3 class="todos-title">TODO NUC</h3>
            <div>
                <p>Tienes <span class="todos-count"></span> Items por hacer!! </p>
                <button type="button" class="todos-clear" style="display:none;" >Borra Completados</button>
            </div>
        </div>
        <form class="todos-form" name="todos">
            <input type="text" placeholder="Que vas hacer KING????" name="todo">
            <small>Escribi algo KING!!!!</small>
        </form>
        <ul class="todos-list">
        </ul>
    </div>
`;

// let obj = {
//   name: 'lala',
//   apellido: 'lolo',
// };
// localStorage.setItem('mi valor', JSON.stringify(obj));

const saveInLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//SELECTORES
const root = document.querySelector('.todos');
const list = root.querySelector('.todos-list');
const count = root.querySelector('.todos-count');
const clear = root.querySelector('.todos-clear');
const form = document.forms.todos;
const input = form.elements.todo;

//STATE
let state = JSON.parse(localStorage.getItem('todos')) || [];

//RENDER FUNCTION
const renderTodos = (todos) => {
  let todosListHTML = todos
    .map(
      (todo, index) => `
        <li data-id="${index}"${todo.complete ? ' class="todos-complete"' : ''}>
            <input type="checkbox"${todo.complete ? ' checked' : ''}>
            <span>${todo.label}</span>
            <button type="buttom"></button>

        </li>
    `
    )
    .join('');
  list.innerHTML = todosListHTML;
  clear.style.display = todos.filter((todo) => todo.complete).length
    ? 'block'
    : 'none';
  count.innerText = todos.filter((todo) => !todo.complete).length;
};

//HANDLERS
const addTodo = (e) => {
  e.preventDefault();
  const label = input.value.trim();
  const complete = false;

  if (label.length === 0) {
    form.classList.add('error');
    return;
  }
  form.classList.remove('error');
  state = [...state, { label, complete }];
  renderTodos(state);
  saveInLocalStorage(state);
  console.log(state);
  input.value = '';
};

const updateTodo = ({ target }) => {
  //Obtener la posicion en array del TODO
  const id = parseInt(target.parentNode.dataset.id);
  const complete = target.checked;
  state = state.map((todo, index) => {
    if (index === id) {
      return {
        ...todo,
        complete,
      };
    }
    return todo;
  });
  console.log(state);
  renderTodos(state);
  saveInLocalStorage(state);
};

const editTodo = ({ target }) => {
  if (target.nodeName !== 'SPAN') {
    return;
  }
  //Obtener la posicion en array del TODO
  const id = parseInt(target.parentNode.dataset.id);
  const currentLabel = state[id].label;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentLabel;

  const handlerEdit = (event) => {
    const label = event.target.value;
    event.stopPropagation();
    if (label !== currentLabel) {
      state = state.map((todo, index) => {
        if (index === id) {
          return {
            ...todo,
            label,
          };
        }
        return todo;
      });
      renderTodos(state);
      saveInLocalStorage(state);
    }
    event.target.display = '';
    event.target.removeEventListener('change', handlerEdit);
  };

  input.addEventListener('change', handlerEdit);

  target.parentNode.append(input);
  input.focus();
};

const deleteTodo = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  //Obtener la posicion en array del TODO
  const id = parseInt(target.parentNode.dataset.id);
  const label = target.previousElementSibling.innerText;

  if (window.confirm(`Estas seguro de borrar ${label}, ok????`)) {
    state = state.filter((todo, index) => index !== id);
    renderTodos(state);
    saveInLocalStorage(state);
  }
};

const clearCompletes = () => {
  const todoCompletes = state.filter((todo) => todo.complete).length;
  if (todoCompletes === 0) {
    return;
  }
  if (window.confirm(`Borramos los ${todoCompletes} todos??`)) {
    state = state.filter((todo) => !todo.complete);
    renderTodos(state);
    saveInLocalStorage(state);
  }
};

//INIT FUNCTION -> Inicia nuestra app

function init() {
  renderTodos(state);
  form.addEventListener('submit', addTodo);
  list.addEventListener('change', updateTodo);
  list.addEventListener('dblclick', editTodo);
  list.addEventListener('click', deleteTodo);
  clear.addEventListener('click', clearCompletes);
}

init();
