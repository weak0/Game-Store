import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./StoreNav.module.css";
const StoreNav = (props) => {
  const onMouseOverHandler = (e) => {
    e.target = e.target.closest("li");
    const element = e.target.children[0];
    element.classList.add(styles.active);
  };
  const onMouseDownHandler = (e) => {
    e.target = e.target.closest("li");
    const element = e.target.children[0];
    element.classList.remove(styles.active);
  };

  const addFilter = (e) => {
    props.setFiltersHandler(e.target.textContent);
  };

  return (
    <aside>
      <div className={styles.filters}>
        <h2>Geners</h2>
        <ul>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-chess-rook"
            />
            Strategy
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-khanda"
            />
            RPG
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-poo" />
            Shooter
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-map" />
            Adventure
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-puzzle-piece"
            />
            Puzzel
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-car" />
            Racing
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-volleyball"
            />
            Sports
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            {" "}
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-gun" />
            Action
          </li>
        </ul>
        <h2>Yours</h2>
        <ul>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-gift" />
            Wishlist
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-star" />
            Ratings
          </li>
          <li
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseDownHandler}
            onClick={addFilter}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-comment"
            />
            Reviews
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default StoreNav;
