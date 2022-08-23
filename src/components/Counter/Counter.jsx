import React from "react";

import styles from "./Counter.module.scss";

const Counter = ({ flex = false }) => {
  const [counter, setCounter] = React.useState(1);

  const increaseCounter = () => {
    counter === 30 ? setCounter(counter) : setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    counter === 1 ? setCounter(counter) : setCounter(counter - 1);
  };

  return (
    <div className={flex ? `${styles.flex_wrapper}` : ""}>
      <button
        className={styles.plus_btn}
        onClick={() => {
          increaseCounter();
        }}
      ></button>
      <div className={styles.counter}>{counter}</div>
      <button
        className={styles.minus_btn}
        onClick={() => {
          decreaseCounter();
        }}
      ></button>
    </div>
  );
};

export default Counter;
