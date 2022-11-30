import NavComponent from "../Nav/NavComponent";
import styles from "./GamePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ImageSlider from "../UI/ImageSlider";
const GamePage = () => {
  const [moreIsActive, setMoreIsActive] = useState(false);

  const MoreActive = () => {
    return (
      <div className={styles.more + " " + styles.active}>
        <h3>Cyberpunk 2077 Website</h3>
        <p>Released: 10th of December, 2020</p>
        <p>
          Platforms: Playstation 4, PC, Xbox Series S/X, Playstation 5, Xbox One
        </p>
        <p>Main Genre: RPG</p>
        <p>Developers: CD PROJECT RED, CD PROJECT</p>
        <p>Publishers: CD PROJECT RED</p>
        <div className={styles.moreBtn}>
        <button
          onClick={() => {
            setMoreIsActive(false);
          }}
        >
          Hide
          <FontAwesomeIcon
            icon="fa-solid fa-angle-up"
            className={styles.arrowUp}
          />
        </button></div>
      </div>
    );
  };

  const MoreUnactive = () => {
    return (
      <div className={styles.more + " " + styles.active}>
        <h3>More details</h3>
        <div className={styles.moreBtn}><button
          onClick={() => {
            setMoreIsActive(true);
          }}
        >
          Show
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            className={styles.arrowUp}
          />
        </button></div>
      </div>
    );
  };

  return (
    <div className={styles.gamePage}>
      <NavComponent mode="store" />
      <div className={styles.content}>
        <header className={styles.header}>
          <button>
            <FontAwesomeIcon
              icon="fa-solid fa-angle-left"
              className={styles.arrow + " " + styles.active}
            />
            Store
          </button>
          <h1>CyberPunk 2077</h1>
        </header>
        <main className={styles.main}>
          <ImageSlider />
          <div className={styles.about}>
            <div>
              <section>
                <h2>About</h2>
                <div className={styles.paragraph}>
                  Cyberpunk 2077 is a continuation of the events of Cyberpunk
                  2020, taking an alternate path to that of Cyberpunk V3.0. The
                  game is set in the dystopian metropolis of Night City. It is
                  set in the Free State of Northern California. Night City is
                  located south of San Francisco around the area of Morro Bay,
                  CA. During Cyberpunk 2020, Night City is said to have a
                  population of more than five million inhabitants. However,
                  this number is suspected to be considerably larger in 2077.
                  Following an economic collapse sometime during the early 21st
                  century, the United States is forced to rely on large
                  corporations to survive. These corporations deal in a wide
                  range of areas, such as weapons, robotics, cybernetics,
                  pharmaceuticals, communications, and biotechnology; many of
                  these companies operate above the law. The game follows the
                  story of V — a hired gun on the rise in Night City, the most
                  violent and dangerous metropolis of the corporate-ruled
                  future. A robust character creator will allow players to
                  choose Vs gender, visual appearance, as well as historical
                  background — all of which may influence the shape of the game.
                  The world is inspired by the works of authors such as William
                  Gibson (author of Neuromancer) and Phillip K Dick, whose novel
                  Do Androids Dream of Electric Sheep? and subsequent movie
                  adaption Blade Runner heavily influenced the creator, Mike
                  Pondsmith, in creating the original tabletop RPG.
                </div>
              </section>
              {moreIsActive ? <MoreActive /> : <MoreUnactive />}
            </div>
            <div className={styles.actions}>
              <span>
                $25.99
                <FontAwesomeIcon
                  className={styles.heart}
                  icon="fa-solid fa-heart"
                />
              </span>
              <button>Add to cart +</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GamePage;
