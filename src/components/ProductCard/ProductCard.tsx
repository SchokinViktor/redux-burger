import React from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice/cartSlice';
import { TCartItem } from '../../redux/slices/cartSlice/types';

import styles from './_ProductCard.module.scss';
import Counter from '../Counter/Counter';

type ProductCartProps = {
  id: number;
  price: number;
  weight: number;
  name: string;
  description: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCartProps> = ({
  id,
  name,
  description,
  imageUrl,
  price,
  weight,
}) => {
  const [counter, setCounter] = React.useState<number>(1);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const removeCounter = () => {
    setCounter(counter - 1);
  };

  const dispatch = useDispatch();
  const addObjectToCart = () => {
    const cartObject: TCartItem = {
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
          flex={false}
          counter={counter}
          minCount={1}
          maxCount={30}
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
