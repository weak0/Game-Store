import NavComponent from "../Nav/NavComponent";
import styles from "./GamePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ImageSlider from "../UI/ImageSlider";
import { Link, useParams } from "react-router-dom";
import LoadingSpiner from "../UI/LoadingSpiner";
import AddToCart from "../Cart/AddToCart";
import Hearth from "../Wishlist/Hearth";

const GamePage = () => {
  const [moreIsActive, setMoreIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gameInfo, setGameInfo] = useState([]);
  const { dbkey, id } = useParams();
  useEffect(() => {
    async function getGameInfo() {
      try {
        const response = await fetch(
          `https://gamestore-42f62-default-rtdb.europe-west1.firebasedatabase.app/games/${dbkey}/${id}.json`
        );
        if (!response.ok) {
          throw new Error("Upps... sory we couldnt load this page");
        }
        const data = await response.json();
        setGameInfo(data);
        setIsLoading(false);
      } catch (e) {
        alert(e);
      }
    }
    getGameInfo();
  }, [dbkey, id]);

  const MoreActive = () => {
    return (
      <div className={styles.more + " " + styles.active}>
        <h3>
          <a href={gameInfo.website}>{gameInfo.title} Website</a>
        </h3>
        <p>Released: {gameInfo.relased}</p>
        <p>Platforms: {gameInfo.platfroms.map((el) => el + ", ")}</p>
        <p>Main Genre: {gameInfo.genres[0]}</p>
        <p>Developers: {gameInfo.developers}</p>
        <p>Publishers: {gameInfo.publishers}</p>
        <div className={styles.moreBtn}>
          <button
            onClick={() => {
              setMoreIsActive(false);
            }}
          >
            Hide
            <FontAwesomeIcon
              icon="fa-solid fa-angle-up"
              className={styles.arrowUp}
            />
          </button>
        </div>
      </div>
    );
  };

  const MoreUnactive = () => {
    return (
      <div className={styles.more + " " + styles.active}>
        <h3>More details</h3>
        <div className={styles.moreBtn}>
          <button
            onClick={() => {
              setMoreIsActive(true);
            }}
          >
            Show
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-down"
              className={styles.arrowUp}
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.gamePage}>
      <NavComponent mode="store" />
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <div className={styles.content}>
          <header className={styles.header}>
            <Link to="/browse">
              <FontAwesomeIcon
                icon="fa-solid fa-angle-left"
                className={styles.arrow + " " + styles.active}
              />
              Store
            </Link>
            <h1>{gameInfo.title}</h1>
          </header>
          <main className={styles.main}>
            <ImageSlider images={gameInfo.image} />
            <div className={styles.about}>
              <div>
                <section>
                  <h2>About</h2>
                  <div className={styles.paragraph}>{gameInfo.about}</div>
                </section>
                {moreIsActive ? <MoreActive /> : <MoreUnactive />}
              </div>
              <div className={styles.actions}>
                <span>
                  {gameInfo.price}
                  <Hearth id={id}/>
                </span>
                <AddToCart
                  price={gameInfo.price}
                  title={gameInfo.title}
                  id={id}
                />
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default GamePage;
