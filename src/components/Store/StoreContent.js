import styles from "./StoreContent.module.css";
import GameListComponent from "../Games/GameListComponent";

const StoreContent = (props) => {


  return (
    <div className={styles.storeContent}>
      <header>
        <h1>Trending and interesting</h1>
        <h3>Based on player counts and ratings</h3>
      </header>
      <div className={styles.sorting}>
        <div className={styles.sortingLeft}>
          <button>Filter by: <b>{props.filters}</b></button>
          <button onClick={props.clearFiltersHandler}>Clear Filters</button>
        </div>
        {/* <div className={styles.sortingRight}>
          <span>Display Options: </span>
          <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-table-cells" /></button>
          <button><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-list" /></button>
        </div> */}
      </div>
        <GameListComponent/>
    </div>
  );
};

export default StoreContent;
