import styles from "./NavComponent.module.css";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <Link to="/"><i className="fa-solid fa-headset"></i>Game Store</Link>
        <Link to="/browse"><i className="fa-solid fa-cart-shopping"></i>Browse Store</Link>
      </div>
      <div className={styles.navRight}>
        <Link to="/"><i className="fa-brands fa-github"></i>Weak0</Link>
        <Link to="/browse"><i className="fa-solid fa-bag-shopping"></i>Cart:0</Link>
      </div>
    </nav>
  );
};

export default NavComponent;
