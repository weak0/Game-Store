import NavComponent from "../Nav/NavComponent";
import StoreContent from "./StoreContent";
import styles from "./Store.module.css";
import StoreNav from "./StoreNav";
import Footer from "../Footer/Footer";

const Store = () => {
  return (
    <main className={styles.mainStore}>
      <NavComponent mode="store" />
      <div className={styles.storeContent}>
        <StoreNav />
        <StoreContent />
      </div>
      <Footer/>
    </main>
  );
};

export default Store;
