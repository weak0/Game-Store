import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {

    const clickHandler = (e) => {
        if(e.target.classList[0] === styles.cartBackdrop ) {
            props.backdrophandle();
        }
    }

  return (
    <div onClick={clickHandler} className={styles.cartBackdrop}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>2 Games</h2>
          <button>Clear</button>
        </div>
        <div className={styles.cartMain}>
          <ul>
            <li>
              <span>Life is Strange</span>{" "}
              <span>
                $14.99
                <button>
                  <FontAwesomeIcon
                    icon="fa-solid fa-x"
                    className={styles.cross}
                  />
                </button>
              </span>
            </li>
            <li>
              <span>Mario Kart 8: Deluxe</span>{" "}
              <span>
                $24.99
                <button>
                  <FontAwesomeIcon
                    icon="fa-solid fa-x"
                    className={styles.cross}
                  />
                </button>
              </span>
            </li>
          </ul>
          <div className={styles.cartSummary}>
            <span>Total: $39.98</span>
            <button>
              Checkout{" "}
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
