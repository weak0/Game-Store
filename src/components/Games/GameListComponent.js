import { useEffect, useState } from "react";
import Game from "./Game";
import styles from "./GameList.module.css";

const GameListComponent = () => {
  const [gameListWidth, setGameListWidth] = useState();
  const dbGames = [<Game key={0} id={0} number={0}/>, <Game number={1} key={1} id={1}/> , <Game number={2} key={2} id={2}/>, <Game number={3}  key={3}/> , <Game key={4} number={4} />, <Game key={5} number={5}/> , <Game key={6} number={6} />, <Game key={7} number={7} />]

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
        {dbGames.map((game , index) => {
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
    <Content/>
    </section>
  );
};

export default GameListComponent;
