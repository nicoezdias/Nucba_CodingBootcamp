import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);

  const handlerAdd = () => {
    setCounter((estadoAnterior) => estadoAnterior + 1);
  };

  const handlerSubtract = () => {
    if (counter >= 1) {
      setCounter((estadoAnterior) => estadoAnterior - 1);
    } else {
      setError('Error: el numero debe ser mayor e igual a 0 🦄 ');
    }
  };

  const removeError = () => {
    setError(null);
  };

  return (
    <div>
      <div className="counter">
        <div>
          <button type="button" className="btn" onClick={handlerSubtract}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className="number-counter">{counter}</div>
        <div>
          <button type="button" className="btn" onClick={handlerAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      {error && (
        <div style={{ margin: '20px' }}>
          <center>
            <button className="btn" onClick={removeError}>
              Borrar error
            </button>
            <p style={{ color: 'red' }}>{error}</p>
          </center>
        </div>
      )}
    </div>
  );
};

export default Counter;
