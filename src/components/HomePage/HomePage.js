import styles from "./HomePage.module.css";
import HomeContent from "./HomeContent";
import videobackground from "../../media/1.mp4";
import NavComponent from "../Nav/NavComponent";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <NavComponent />
      <video autoPlay loop className={styles.video}>
        <source src={videobackground} type="video/mp4" />
      </video>
      <HomeContent />
    </main>
  );
};

export default HomePage;
