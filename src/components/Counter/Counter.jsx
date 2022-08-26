import React from "react";
import styles from "./Counter.module.scss";

const Counter = ({ flex = false, counter, onClickAdd, onClickRemove }) => {
  return (
    <div className={flex ? `${styles.flex_wrapper}` : ""}>
      <button
        className={styles.plus_btn}
        onClick={() => {
          onClickAdd();
        }}
      ></button>
      <div className={styles.counter}>{counter}</div>
      <button
        className={styles.minus_btn}
        onClick={() => {
          onClickRemove();
        }}
      ></button>
    </div>
  );
};

export default Counter;
