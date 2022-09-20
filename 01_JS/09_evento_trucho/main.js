let elementoHTML = {
  nodeName: 'BUTTON',
  parentElement: 'DIV',
  id: 'miBoton',
  classList: 'btn',
  addEventListener(e, fn) {
    let evento = {
      type: e,
      target: {
        ...this,
      },
    };
    fn(evento);
  },
};

elementoHTML.addEventListener('click', cualquierFn);

function cualquierFn(e, lallaa, lololo) {
  console.dir(e);
}

const boton = document.getElementById('truebtn');

boton.addEventListener('click', cualquierFn);
