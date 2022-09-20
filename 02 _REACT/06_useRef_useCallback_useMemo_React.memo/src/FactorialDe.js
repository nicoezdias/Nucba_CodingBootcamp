import React, { useMemo } from 'react';

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

const FactorialDe = ({ num, increment }) => {
  const factorialValue = useMemo(() => {
    return factorial(num);
  }, [num]);

  return (
    <div>
      <p>
        El factorial de <b>{num}</b> es <b>{factorialValue}</b>
      </p>
      <br />
      <button onClick={increment}>Next</button>
    </div>
  );
};

//? SOLO FUNCIONA SI LAS PROPS SON PRIMITIVOS
//export default React.memo(FactorialDe);

//? PODEMOS USAR ESTA OPCION DE PASAR UN CALLBACK, PARA IGNORAR LAS PROPS QUE TIPOS REFERENCIALES Y SOLO OBSERVAR LOS CAMBIOS EN LAS QUE SON PRIMITIVOS
// export default React.memo(FactorialDe, (prevProps, nextProps) => {
//   return prevProps.num === nextProps.num;
// });

//? USAMOS HOOKS Y REACT MEMO
export default React.memo(FactorialDe);

//? USAMOS SOLO HOOKS
//export default FactorialDe;
