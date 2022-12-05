import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import styles from "./Cart.module.css";
const Li = (props) => {
  const dispatch = useDispatch();

  return props.items.map((game) => (
    <li key={game.id}>
      <span>{game.title}</span>
      <span>
        {game.price}
        <button
          onClick={() => dispatch(cartActions.removeGameFromCart(game.id))}
        >
          <FontAwesomeIcon icon="fa-solid fa-x" className={styles.cross} />
        </button>
      </span>
    </li>
  ));
};

export default Li;
