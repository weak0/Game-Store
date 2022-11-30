import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4> <FontAwesomeIcon icon="fa-solid fa-headphones" /> Game Store</h4>
      <div className={styles.lists}>
        <div>
          <span>
            <b>Company</b>
          </span>
          <span>About</span>
          <span>Press center</span>
          <span>Carriers</span>
        </div>
        <div>
          <span>
            <b>Console</b>
          </span>
          <span>Nintendo</span>
          <span>Xbox</span>
          <span>Playstation</span>
        </div>
        <div>
          <span>
            <b>Resources</b>
          </span>
          <span>Help Center</span>
          <span>Contact</span>
        </div>
        <div>
          <span>
            <b> Product Help</b>
          </span>
          <span>Support</span>
          <span>File a Bug</span>
        </div>
      </div>
      <div>
        This page was built by Maciej Gorzela with React. Portions of this page
        are inspired by RAWG, RAWG.io. and github user gianlucajahn This page was built only for
        educational purposes.
      </div>
      <div className={styles.links}>
        <p>Privacy</p>
        <p>Website Privacy Notice</p>
        <p>Cookies</p>
        <p>Legal</p>
        <p>Collaborative Gudilines</p>
      </div>
    </footer>
  );
};
export default Footer;
