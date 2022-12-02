import { useEffect, useState } from "react";
import { getGames } from "../db/getGames";
import Game from "./Game";
import styles from "./GameList.module.css";
import LoadingSpiner from "../UI/LoadingSpiner";

const GameListComponent = () => {
  const [gameListWidth, setGameListWidth] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [gamesDb, setGamesDb] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGames();
      setGamesDb(data);
      setIsLoading(false)
    }
    fetchData();
  }, [])

  const games = gamesDb.map( el => {
    return <Game key={el.id} data={el}/>
  })



const Column = (props) => <div className={styles.column}>{props.children}</div> 
  
  useEffect(() => {
    const gameList = document.querySelector("#gameList")
    setGameListWidth((gameList.clientWidth / 400).toFixed(0));
    window.addEventListener("resize", () => {
      setGameListWidth((gameList.clientWidth / 400).toFixed(0));
    });
  },[]);

  const Content = () => {
    const arr = []
    for(let i = 0; i < gameListWidth; i++){
        arr.push(i);
    }

    return arr.map((el) => {
    return (
        <Column key={el}>
        {games.map((game , index) => {
          const colNumber = index % arr.length
          if(colNumber === el ) {
            return game
          }
          return null
        })}
      </Column> 
    )})
  }



  return (
    <section className={styles.gameList} id="gameList">
    {isLoading ? <LoadingSpiner/> : <Content/>}
    </section>
  );
};

export default GameListComponent;
