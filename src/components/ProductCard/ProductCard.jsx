import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

import styles from "./ProductCard.module.scss";
import Counter from "../Counter/Counter";

const ProductCard = ({ id, name, description, imageUrl, price, weight }) => {
  const [counter, setCounter] = React.useState(1);
  const addCounter = () => {
    counter !== 30 && setCounter(counter + 1);
  };
  const removeCounter = () => {
    counter !== 1 && setCounter(counter - 1);
  };

  const dispatch = useDispatch();
  const addObjectToCart = () => {
    const cartObject = {
      id,
      name,
      weight,
      imageUrl,
      price,
      counter,
    };

    dispatch(addToCart(cartObject));
  };

  const [totalItemPrice, setTotalItemPrice] = React.useState(0);
  React.useEffect(() => {
    setTotalItemPrice(price * counter);
  }, [counter, price]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.img_holder}>
        <img src={imageUrl} alt={name} />
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
          <div className={styles.total_price}>{totalItemPrice.toFixed(2)}₴</div>
        </div>
        <button className={styles.btn} onClick={() => addObjectToCart()}>
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
