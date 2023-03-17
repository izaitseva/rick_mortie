import { FaSistrix } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, search }) => {

    const handleChange = e => {
        const newSearchValue = e.target.value.toLowerCase();
        onSearch(newSearchValue);
    }

    return (
        <div className={styles.search_input_wrapper}>
            <FaSistrix size={18} color="rgba(0, 0, 0, 0.54)" />
            <input className={styles.search_input} type="text" onChange={handleChange} placeholder="Filter by name..." value={search}/>
        </div>
    )
}

export default SearchBar;