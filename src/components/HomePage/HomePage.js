import NavComponent from "./NavComponent";
import styles from "./HomePage.module.css";
import HomeContent from "./HomeContent";
import videobackground from "../../media/1.mp4";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <video autoPlay loop className={styles.video}>
        <source src={videobackground} type="video/mp4" />
      </video>
      <NavComponent />
      <HomeContent />
    </main>
  );
};

export default HomePage;
