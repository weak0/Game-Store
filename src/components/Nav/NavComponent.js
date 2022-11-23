import styles from "./NavComponent.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavComponent = (props) => {

  const browseStore = <Link to="/browse"><i className="fa-solid fa-cart-shopping"></i>Browse Store</Link>
  const search = <><input className={styles.searchInput} type="text" placeholder="Search games..." /><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></>

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <Link to="/"><i className="fa-solid fa-headset"></i>Game Store</Link>
        {props.mode === 'store' ? search  :  browseStore}
      </div>
      <div className={styles.navRight}>
        <a href="https://github.com/weak0"><i className="fa-brands fa-github"></i>Weak0</a>
        <Link to="/cart"><i className="fa-solid fa-bag-shopping"></i>Cart:0</Link>
      </div>
    </nav>
  );
};

export default NavComponent;
