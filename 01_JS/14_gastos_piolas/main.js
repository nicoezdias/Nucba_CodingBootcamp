//Selectores y utilidades
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const form = document.querySelector('form');
const descripcion = form.elements.descripcion;
const monto = form.elements.monto;
const tipo = form.elements.tipo;
const fecha = form.elements.fecha;

const tabla = document.querySelector('#tabla');

const month = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const saveInLocalStorage = (state) => {
  localStorage.setItem('mov', JSON.stringify(state)); //{lala: "lolo"} -> '{"lala": "lolo"}'
};

//Estado

let state = JSON.parse(localStorage.getItem('mov')) || []; //'{"lala": "lolo"}' -> {lala: "lolo"}

//renders
const renderTable = (state) => {
  const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Monto</th>
                </tr>
            </thead>
            <tbody>
            ${state
              .map((mov, indx) => {
                return `
                    <tr>
                        <td scope="row">${indx + 1}</td>
                        <td scope="row">${mov.fecha}</td>
                        <td scope="row">${
                          mov.tipo == 1 ? 'Ingreso' : 'Gasto'
                        }</td>
                        <td scope="row">${mov.descripcion}</td>
                        <td scope="row" class="${
                          mov.tipo == 1 ? 'text-success' : 'text-danger'
                        }">$ ${mov.monto}</td>
                     </tr>

                    `;
              })
              .join('')}
            </tbody>
        </table>
    `;
  tabla.innerHTML = tableHTML;
};

const renderChart = (state) => {
  //Obtenemos los valores de los meses
  const numeroMes = [...new Set(state.map((mov) => mov.fecha.split('-')[1]))]; //"2020-10-10" -> ["2020","10","10"][1] -> "10"

  //filtrar el total de ingresos
  const ingresos = state
    .filter((mov) => mov.tipo == 1)
    .reduce((acc, current) => {
      let mes = current.fecha.split('-')[1];
      return {
        ...acc,
        [mes]: acc[mes]
          ? parseFloat(acc[mes]) + parseFloat(current.monto)
          : parseFloat(current.monto),
      };
    }, {}); //{"01": 100, "2": 200 .......}

  //filtrar el total de ingresos

  const gastos = state
    .filter((mov) => mov.tipo == 2)
    .reduce((acc, current) => {
      let mes = current.fecha.split('-')[1];
      return {
        ...acc,
        [mes]: acc[mes]
          ? parseFloat(acc[mes]) + parseFloat(current.monto)
          : parseFloat(current.monto),
      };
    }, {});

  //Completamos con 0, los undefined
  numeroMes.forEach((num) => {
    num in gastos ? null : (gastos[num] = 0);
    num in ingresos ? null : (ingresos[num] = 0);
  });

  const valorPorMesIngreso = Object.keys(ingresos)
    .sort()
    .map((key) => ingresos[key]);

  const valorPorMesGastos = Object.keys(ingresos)
    .sort()
    .map((key) => gastos[key]);

  //Ordenamos los meses y usamos nuestro array month para pasarlo tipo string
  const meses = numeroMes.sort().map((numMes) => month[numMes - 1]);

  ctx.clearRect(0, 0, canvas.width, canvas.heigth);
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [...meses],
      datasets: [
        {
          label: 'Ingresos',
          fill: false,
          data: [...valorPorMesIngreso],
          color: '#1d2d50',
          borderColor: '#4CAF50',
          backgroundColor: '4CAF50',
        },
        {
          label: 'Gastos',
          fill: false,
          data: [...valorPorMesGastos],
          color: '#1d2d50',
          borderColor: '#ff414d',
          backgroundColor: 'ff414d',
        },
      ],
    },
  });
};

//handlers
const handlerSubmit = (evento) => {
  evento.preventDefault();
  state = [
    ...state,
    {
      descripcion: descripcion.value,
      monto: monto.value,
      tipo: tipo.value,
      fecha: fecha.value,
    },
  ];
  saveInLocalStorage(state);
  renderTable(state);
  renderChart(state);
  form.reset();
};

//INIT

function init() {
  renderTable(state);
  renderChart(state);
  form.addEventListener('submit', handlerSubmit);
}

init();
