import { useState } from "react";
import styles from "./Game.module.css";

const Game = (props) => {
  const [isActive, setIsActive] = useState(false);


  const onMouseOverHandler = () => { 
   setIsActive(true) 
  };

  const onMouseDownHandler = () => {
    setIsActive(false);
  };
  return (
    <div className={isActive ? `${styles.game}  ${styles.active}`: styles.game}>
      <div className={styles.img}>
        <img
          src="https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188604/cyberpunk_n6jitl.jpg"
          alt="CyberPunk"
        />
      </div>
      <div
        className={styles.description}
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseDownHandler}
      >
        <div className={styles.cartActions}>
          <span>Add to cart +</span>
          <span>24.99$</span>
        </div>
        <h4>{props.number}</h4>
        <div className={isActive ? `${styles.moredetails}  ${styles.active}`: styles.moredetails}>
          <p>Released: 17.09.2013</p>
          <p>Genres: Action, Adventure</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
