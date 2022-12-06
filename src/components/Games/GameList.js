import { useEffect, useState } from "react";
import { getGames } from "../db/getGames";
import Game from "./Game";
import styles from "./GameList.module.css";
import LoadingSpiner from "../UI/LoadingSpiner";
import { useSelector } from "react-redux";

const GameListComponent = (props) => {
  const [gameListWidth, setGameListWidth] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [gamesDb, setGamesDb] = useState([]);
  const wishlist = useSelector((state) => state.wishReducer.wishlist);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGames();
      setGamesDb(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const wishlistFilter = (el) => {
    const filtered = wishlist.map((val) => {
      if (val === el.id) {
        return <Game key={el.id} data={el} />;
      } else {
        return null;
      }
    });
    return filtered;
  };
  const searchFilter = (el, val) => {
    const arr = [];
    val = val.toLowerCase();
    const title = el.title.toLowerCase();
    if (title.includes(val)) {
      arr.push(<Game key={el.id} data={el} />);
    }
    return arr;
  };

  const games = gamesDb.map((el) => {
    if (props.filters.type === "none") {
      return <Game key={el.id} data={el} />;
    } else if (el.genres === props.filters.type) {
      return <Game key={el.id} data={el} />;
    } else if (props.filters.type === "Wishlist") {
      return wishlistFilter(el);
    } else if (props.filters.type === "search") {
      return searchFilter(el, props.filters.payload);
    } else {
      return null;
    }
  });

  const Column = (props) => (
    <div className={styles.column}>{props.children}</div>
  );

  useEffect(() => {
    const gameList = document.querySelector("#gameList");
    const mergeSpace = () => {
      setGameListWidth((gameList.clientWidth / 400).toFixed(0));
    };
    setGameListWidth((gameList.clientWidth / 400).toFixed(0));
    window.addEventListener("resize", mergeSpace);

    return () => {
      window.removeEventListener("resize", mergeSpace);
    };
  }, []);

  const Content = () => {
    const arr = [];
    for (let i = 0; i < gameListWidth; i++) {
      arr.push(i);
    }
    return arr.map((el) => {
      return (
        <Column key={el}>
          {games.map((game, index) => {
            const colNumber = index % arr.length;
            if (colNumber === el) {
              return game;
            }
            return null;
          })}
        </Column>
      );
    });
  };

  return (
    <section className={styles.gameList} id="gameList">
      {isLoading ? (
        <LoadingSpiner />
      ) : games.every((element) => element === null) ? (
        <h3> No games found</h3>
      ) : (
        <Content />
      )}
    </section>
  );
};

export default GameListComponent;
