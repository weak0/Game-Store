import NavComponent from "../Nav/NavComponent";
import StoreContent from "./StoreContent";
import styles from "./Store.module.css";
import StoreNav from "./StoreNav";
import Footer from "../Footer/Footer";
import { useState } from "react";

const Store = () => {
  const [filters, setFilters] = useState({ type: "none" });
  const clearFiltersHandler = () => {
    setFilters({ type: "none" });
  };
  const setFiltersHandler = (category) => {
    setFilters({ type: category });
  };
  const searchGame = (value) => {
    setFilters({ type: "search", payload: value });
  };
  return (
    <main className={styles.mainStore}>
      <NavComponent mode="store" searchHandler={searchGame} />
      <div className={styles.storeContent}>
        <StoreNav setFiltersHandler={setFiltersHandler} />
        <StoreContent
          filters={filters}
          clearFiltersHandler={clearFiltersHandler}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Store;
