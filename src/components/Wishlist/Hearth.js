import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { wishListActions } from "../../store/wishList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../Games/GamePage.module.css'

const Hearth = (props) => {
    const [gameStatus, setGameStatus] = useState();
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wishReducer.wishlist );
    useEffect( () => {
       const index = wishList.indexOf(props.id)
        if(index === -1) {
            setGameStatus(false)
        }
        else {
            setGameStatus(true);
        }
    }, [props.id, wishList])

    const handleClick = () => {
        if(!gameStatus) {
            dispatch(wishListActions.addGame(props.id))
        
        }else {
            dispatch(wishListActions.removeGame(props.id))
        }
    }

    return ( <FontAwesomeIcon
    className={gameStatus ? styles.heart + " " + styles.active : styles.heart}
    icon="fa-solid fa-heart"
    onClick={handleClick}
  />)

}

export default Hearth