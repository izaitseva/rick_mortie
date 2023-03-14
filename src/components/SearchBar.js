import { FaSistrix } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {

    const handleChange = e => {
        const newSearchValue = e.target.value.toLowerCase();
        onSearch(newSearchValue)
    }

    return (
        <div className="search-input-wrapper">
            <FaSistrix size={18} color="rgba(0, 0, 0, 0.54)" />
            <input className="search-input" type="text" onChange={handleChange} placeholder="Filter by name..." />
        </div>
    )
}

export default SearchBar;