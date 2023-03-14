import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharacters } from "../chatactersAPI";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getCharacters = async () => {
            try {
                setLoading(true);
                const { data } = await fetchCharacters(searchParams.get('name'));
                setCharacters(data.results);
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
            <SearchBar onSearch={onSubmit} />
            {error && <p>Oh crap!</p>}
            {loading && <h2>I'm trying, wait...</h2>}
            {<ul>
                <CharacterCard characters={sortCharacters(characters)} />
            </ul>}
        </div >
    )
}

export default Characters;