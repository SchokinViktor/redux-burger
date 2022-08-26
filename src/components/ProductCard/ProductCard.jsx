import React from "react";

import styles from "./ProductCard.module.scss";
import Icon from "../icons/Icon";
import Counter from "../Counter/Counter";

const ProductCard = ({ name, description, imageUrl, price, type, weight }) => {
  const [counter, setCounter] = React.useState(1);

  const addCounter = () => {
    counter !== 30 && setCounter(counter + 1);
  };
  const removeCounter = () => {
    counter !== 1 && setCounter(counter - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.img_holder}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.heart_holder}>
        <Icon name='heart' className={styles.heart_icon} />
      </div>
      <div className={styles.counter_holder}>
        <Counter
          counter={counter}
          onClickAdd={addCounter}
          onClickRemove={removeCounter}
        />
      </div>
      <div className={styles.title}>
        {name} <span className={styles.weight}>({weight}g)</span>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.card_footer}>
        <div className={styles.total}>
          <div className={styles.total_text}>Total price</div>
          <div className={styles.total_price}>
            {(price * counter).toFixed(2)} <Icon name='uah' className={styles.uah_icon} />
          </div>
        </div>
        <button className={styles.btn}>Buy now</button>
      </div>
    </div>
  );
};

export default ProductCard;
