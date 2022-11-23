import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './StoreNav.module.css'
const StoreNav = () => {

    const [iconState, setIconState] = useState(styles.icon);
    const onMouseOverHandler = () => {
        setIconState(styles.icon + " " + styles.active)
    }
    const onMouseDownHandler = () => {
        setIconState(styles.icon)
    }

    return (
        <aside>
            <div className={styles.filters}>
                <h2> Filters</h2>
                <li>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler}><FontAwesomeIcon className={iconState} icon="fa-solid fa-gift" />Wishlist</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler}><FontAwesomeIcon className={iconState} icon="fa-solid fa-star" />Ratings</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler}><FontAwesomeIcon className={iconState} icon="fa-solid fa-comment" />Reviews</ul>
                </li>
                <h2>Geners</h2>
                <li>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler}> <FontAwesomeIcon className={iconState} icon="fa-solid fa-gun" />Actions</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler}><FontAwesomeIcon className={iconState} icon="fa-solid fa-chess-rook" />Strategy</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler} ><FontAwesomeIcon className={iconState} icon="fa-solid fa-khanda" />RPG</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler} ><FontAwesomeIcon className={iconState} icon="fa-solid fa-poo" />Shooter</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler} ><FontAwesomeIcon className={iconState} icon="fa-solid fa-map" />Adveture</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler} ><FontAwesomeIcon className={iconState} icon="fa-solid fa-puzzle-piece" />Puzzle</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler} ><FontAwesomeIcon className={iconState} icon="fa-solid fa-car" />Racing</ul>
                    <ul onMouseOver={onMouseOverHandler} onMouseLeave={onMouseDownHandler} ><FontAwesomeIcon className={iconState} icon="fa-solid fa-volleyball" />Sports</ul>
                </li>
            </div>
        </aside>
    )
}

export default StoreNav;