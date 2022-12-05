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
        <button>
          <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-headset" />
          Gaming Page
        </button>
        <button>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-circle-exclamation"
          />
          404 Page
        </button>
        <button>
          <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-bug" />
          404 Query
        </button>
        <button>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-code-commit"
          />
          Commit Log
        </button>
        <button>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-microchip"
          />
          Technologies
        </button>
        <button>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-solid fa-lightbulb"
          />
          Inspired by
        </button>
      </aside>
    </div>
  );
};

export default HomeContent;
