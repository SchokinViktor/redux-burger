import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setModalActive, clearAll } from "../../redux/slices/cartSlice";

import styles from "./ModalCart.module.scss";
import Icon from "../icons/Icon";
import CartItem from "../CartItem/CartItem";

const ModalCart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const isModalActive = cartState.isModalActive,
    totalPrice = cartState.totalPrice,
    cartItems = cartState.cartItems;
  const dispatch = useDispatch();

  const toggleModalCart = () => {
    dispatch(setModalActive(!isModalActive));
  };

  const clearCart = () => {
    dispatch(clearAll());
  };

  React.useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalActive]);

  return (
    <div
      className={
        isModalActive ? `${styles.cart} ${styles.active}` : styles.cart
      }
    >
      <div className={styles.cart_content}>
        <div className={styles.cart_header}>
          <div className={styles.title}>Your order</div>
          {cartItems.length !== 0 && (
            <button className={styles.clear_button} onClick={() => clearCart()}>
              <Icon name='trash' className={styles.trash_icon} />
            </button>
          )}
          <button
            className={styles.close_button}
            onClick={() => toggleModalCart()}
          >
            <Icon name='close' className={styles.close_icon} />
          </button>
        </div>
        {cartItems.length ? (
          <>
            <div className={styles.cart_body}>
              <ul className={styles.cart_list}>
                {cartItems.map((item) => {
                  return (
                    <li key={item.imageUrl} className={styles.list_item}>
                      <CartItem {...item} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.cart_footer}>
              <div className={styles.total_price}>
                Total price{" "}
                <span className={styles.price}>{totalPrice.toFixed(2)}₴</span>
              </div>
              <button className={styles.checkout_button}>Checkout</button>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            The Cart <br /> is empty 🤔
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
