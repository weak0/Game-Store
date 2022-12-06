import styles from "./HomeContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const HomeContent = () => {
  return (
    <div className={styles.content}>
      <section>
        <article>
          <h1>Game Store</h1>
          <p>
            The best destination to buy new games to competitive prices. 24 hour
            support, "best price" guarantee and a flawless UX. Wish for more?
            Tell us below — or check out our <b>careers</b>.
          </p>
        </article>
        <div className={styles.actions}>
          <Link to="/browse">
            <button>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-magnifying-glass"
              />{" "}
              Browse
            </button>
          </Link>
          <Link to="/game/-NIDvAgsqSttL605KhUh/m2">
            <button>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-dice-d6"
              />
              Play Dice
            </button>
          </Link>
          <a href="https://github.com/weak0">
            <button>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-brands fa-github"
              />
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/maciej-gorzela-895178176/">
            <button>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-brands fa-linkedin"
              />
              LinkedIn
            </button>
          </a>
        </div>
      </section>
      <aside className={styles.quickNavigation}>
        <h2>Quick Navigation</h2>
        <Link to='/game/-NIDvAgsqSttL605KhUh/m1'>
          <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-headset" />
          Gaming Page
        </Link>
       <Link to='/404page'>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-circle-exclamation"
          />
          404 Page
        </Link>
        <Link to='/404page'>
          <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-bug" />
          404 Query
        </Link>
        <Link to='/'>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-microchip"
          />
          readme.md
        </Link>
        <a href="https://reactjsexample.com/an-e-commerce-store-imitating-a-game-store-built-with-react/">
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-lightbulb"
          />
          Inspired by
        </a>
      </aside>
    </div>
  );
};

export default HomeContent;
