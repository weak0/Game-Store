import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartActions } from "../../store";
import Li from "./CartLi";

const Cart = (props) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart);
  const amount = useSelector((state) => state.amount);

  const clickHandler = (e) => {
    if (e.target.classList[0] === styles.cartBackdrop) {
      props.backdrophandle();
    }
  };

  return (
    <div onClick={clickHandler} className={styles.cartBackdrop}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>{items.length} Games</h2>
          <button onClick={() => dispatch(cartActions.clearCart())}>
            Clear
          </button>
        </div>
        <div className={styles.cartMain}>
          <ul>{<Li items={items} />}</ul>
          <div className={styles.cartSummary}>
            <span>${amount.toFixed(2)}</span>
            <button>
              Checkout
              <FontAwesomeIcon
                className={styles.arrow}
                icon="fa-solid fa-arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
