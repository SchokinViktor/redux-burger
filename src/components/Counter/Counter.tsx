import styles from './Counter.module.scss';

type CounterProps = {
  flex: boolean;
  counter: number;
  onClickAdd: () => void;
  onClickRemove: () => void;
};

const Counter: React.FC<CounterProps> = ({ flex, counter, onClickAdd, onClickRemove }) => {
  return (
    <div className={flex ? `${styles.flex_wrapper}` : ''}>
      <button
        className={styles.plus_btn}
        onClick={() => {
          onClickAdd();
        }}></button>
      <div className={styles.counter}>{counter}</div>
      <button
        className={styles.minus_btn}
        onClick={() => {
          onClickRemove();
        }}></button>
    </div>
  );
};

export default Counter;
