import clsx from 'clsx';

import styles from './Counter.module.scss';

type CounterProps = {
  flex: boolean;
  counter: number;
  minCount: number;
  maxCount: number;
  onClickAdd: () => void;
  onClickRemove: () => void;
};

const Counter: React.FC<CounterProps> = ({
  flex,
  counter,
  minCount,
  maxCount,
  onClickAdd,
  onClickRemove,
}) => {
  return (
    <div className={flex ? `${styles.flex_wrapper}` : ''}>
      <button
        disabled={counter === maxCount}
        className={styles.plus_btn}
        onClick={() => {
          onClickAdd();
        }}></button>
      <div className={styles.counter}>{counter}</div>
      <button
        disabled={counter === minCount}
        className={styles.minus_btn}
        onClick={() => {
          onClickRemove();
        }}></button>
    </div>
  );
};

export default Counter;
