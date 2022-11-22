import styles from './HomeContent.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const HomeContent = () => {
  return (
    <div className={styles.content}>
      <section>
        <article>
          <h1>Game Store</h1>
          <p>
            The best destination to buy new games to competitive prices. 24 hour
            support, "best price" guarantee and a flawless UX. Wish for more?
            Tell us below — or check out our careers.
          </p>
        </article>
        <div className={styles.actions}>
          <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-magnifying-glass" /> Browse</button>
          <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-dice-d6" />Play Dice</button>
          <button><FontAwesomeIcon className={styles.icon} icon="fa-brands fa-github" />GitHub</button>
          <button><FontAwesomeIcon className={styles.icon} icon="fa-brands fa-linkedin" />LinkedIn</button>
        </div>
      </section>
      <aside className={styles.quickNavigation}>
        <h2>Quick Navigation</h2>
        <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-headset" />Gaming Page</button>
        <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-circle-exclamation" />404 Page</button>
        <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-bug" />404 Query</button>
        <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-code-commit" />Commit Log</button>
        <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-microchip" />Technologies</button>
        <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-lightbulb" />Inspired by</button>
      </aside>
      
    </div>
  );
};

export default HomeContent;

