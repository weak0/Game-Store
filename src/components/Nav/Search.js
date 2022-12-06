import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import styles from "./NavComponent.module.css";

const Search = (props) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    props.searchHandler(inputRef.current.value)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search games..."
        ref={inputRef}
      />
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" onClick={handleSubmit} />
    </form>
  );
};
export default Search;
