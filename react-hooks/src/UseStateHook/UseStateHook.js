import React from 'react';
import styles from './UseState.module.css';

function UseStateHook() {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);

  const handleAdd = (e) => {
    console.log(numbers);
    setNumbers([...numbers, ++numbers.length]);
  };

  return (
    <div>
      <ul className={`wrapper ${styles.wrapper}`}>
        {numbers.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
      <button onClick={(e) => handleAdd(e)} className={styles.button}>
        ADD
      </button>
    </div>
  );
}

export default UseStateHook;
