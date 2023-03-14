import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { paths } from "../paths";
import arrow_back from "../images/arrow_back.png"
import { fetchCharacterById } from "../chatactersAPI";

const CharacterPage = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const linkBack = location?.state?.from ?? paths.main;
    const handleClick = () => navigate(linkBack);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setLoading(true);
                const { data } = await fetchCharacterById(id);
                setCharacter(data);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchCharacter();
    }, [id])

    return (
        <div>
            {error && <h2>There's nothing to see here</h2>}
            {loading && <h2>Please wait...</h2>}
            <img src={arrow_back} alt="arrow-back" />
            <button onClick={handleClick}>Go back</button>
            {
                <div>
                    <img src={character.image} alt="avatar" />
                    <h1>{character.name}</h1>
                    <h3>Informations</h3>
                    <ul>
                        <li>
                            <h2>Gender</h2>
                            <p>{character.gender}</p>
                        </li>
                        <li>
                            <h2>Status</h2>
                            <p>{character.status}</p>
                        </li>
                        <li>
                            <h2>Specie</h2>
                            <p>{character.species}</p>
                        </li>
                        <li>
                            <h2>Origin</h2>
                            <p>{character.origin?.name}</p>
                        </li>
                        <li>
                            <h2>Type</h2>
                            <p>{character.type === "" ? "Unknown" : character.type}</p>
                        </li>
                    </ul>
                </div>}
        </div >
    )
}

export default CharacterPage;