import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

import styles from "./AddToCart.module.css";
export const addtoCartStyle = styles.cartActionsBtn;

const AddToCart = (props) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const itemsInCart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const index = itemsInCart.findIndex((game) => game.id === props.id);
    if (index === -1) {
      setAddedToCart(false);
    } else {
      setAddedToCart(true);
    }
  }, [itemsInCart, props.id]);

  const addToCartHandler = () => {
    if (!addedToCart) {
      const obj = {
        title: props.title,
        price: props.price,
        id: props.id,
      };
      dispatch(cartActions.addGameToCart(obj));
      setAddedToCart(true);
    } else {
      dispatch(cartActions.removeGameFromCart(props.id));
      setAddedToCart(false);
    }
  };

  return (
    <div style={{ fonSize: props.fontSize }}>
      {!addedToCart ? (
        <button
          key={props.id}
          className={addtoCartStyle}
          onClick={addToCartHandler}
        >
          Add to cart+
        </button>
      ) : (
        <button
          className={addtoCartStyle + " " + styles.active}
          onClick={addToCartHandler}
        >
          Added
        </button>
      )}
    </div>
  );
};
export default AddToCart;
