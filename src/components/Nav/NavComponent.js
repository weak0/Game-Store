import styles from "./NavComponent.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavComponent = (props) => {
  const [isCartActive, setIsCartActive] = useState(false);
  const itemsInCart = useSelector((state) => state.cart);

  const backdropHandle = () => {
    setIsCartActive(false);
  };

  const browseStore = (
    <Link to="/browse">
      <i className="fa-solid fa-cart-shopping"></i>Browse Store
    </Link>
  );
  const search = (
    <>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search games..."
      />
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </>
  );

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link to="/">
            <i className="fa-solid fa-headset"></i>Game Store
          </Link>
          {props.mode ? null : browseStore}
        </div>
        <div className={styles.navSearchbar}>
          {props.mode === "store" ? search : null}
        </div>
        <div className={styles.navRight}>
          <a href="https://github.com/weak0">
            <i className="fa-brands fa-github"></i>Weak0
          </a>
          <button
            onClick={() => {
              setIsCartActive(true);
            }}
          >
            <i className="fa-solid fa-bag-shopping"></i>Cart:
            {itemsInCart.length}
          </button>
        </div>
      </nav>
      {isCartActive ? <Cart backdrophandle={backdropHandle} /> : null}
    </>
  );
};

export default NavComponent;
