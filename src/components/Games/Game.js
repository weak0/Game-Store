import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Game.module.css";
import AddToCart, { addtoCartStyle } from "../Cart/AddToCart";

const Game = (props) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { title, image, genres, price, released, id, dbkey } = props.data;
  const onMouseOverHandler = () => {
    setIsActive(true);
  };

  const onMouseDownHandler = () => {
    setIsActive(false);
  };

  const handleClick = (e) => {
    if (e.target.classList.contains(addtoCartStyle)) {
      return;
    }

    navigate(`/game/${dbkey}/${id}`);
  };
  return (
    <div
      className={isActive ? `${styles.game}  ${styles.active}` : styles.game}
      onClick={handleClick}
    >
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <div
        className={styles.description}
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseDownHandler}
      >
        <div className={styles.cartActions}>
          <AddToCart title={title} price={price} id={id} fonSize="18px" />
          <span>${price.toFixed(2)}</span>
        </div>
        <h4>{title}</h4>
        <div
          className={
            isActive
              ? `${styles.moredetails}  ${styles.active}`
              : styles.moredetails
          }
        >
          <p>Released: {released}</p>
          <p>Genres: {genres}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
