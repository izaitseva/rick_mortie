import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharacters } from "../chatactersAPI";
import SearchBar from "../components/SearchBar";
import styles from "./Characters.module.css";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {

        const getCharacters = async () => {
            try {
                setLoading(true);
                const nameParam = searchParams.get('name');
                setSearchValue(nameParam);

                const { data } = await fetchCharacters(nameParam);
                
                setCharacters(data.results);
                setError(false);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCharacters();
    }, [searchParams])

    function onSubmit(value) {
        setSearchParams({ name: `${value}` });
    }

    function sortCharacters(characters) {
        return characters.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div>
            <SearchBar onSearch={onSubmit} search={searchValue}/>
            {loading && <h2>Wubba Lubba Dub-Dub</h2>}
            {error
                ? (
                    <p>I’m sorry, but your <span className={styles.search_value}>{searchParams.get("name")} </span>means very little to me.</p>
                ) : characters.length ? (
                    <ul className={styles.list}>
                        <CharacterCard characters={sortCharacters(characters)} />
                    </ul>
                ) : (
                    <p>No characters found.</p>
                )}
        </div>
    )
}

export default Characters;