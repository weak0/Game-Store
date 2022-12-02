import NavComponent from "../Nav/NavComponent";
import StoreContent from "./StoreContent";
import styles from "./Store.module.css";
import StoreNav from "./StoreNav";
import Footer from "../Footer/Footer";
import { useState } from "react";

const Store = () => {
  const [filters, setFilters] = useState('none')
  const clearFiltersHandler = () => {
    setFilters('none')
  }
  const setFiltersHandler = (category) => {
    setFilters(category)
  }
  return (
    <main className={styles.mainStore}>
      <NavComponent mode="store" />
      <div className={styles.storeContent}>
        <StoreNav setFiltersHandler={setFiltersHandler} />
        <StoreContent filters={filters} clearFiltersHandler={clearFiltersHandler}  />
      </div>
      <Footer/>
    </main>
  );
};

export default Store;
