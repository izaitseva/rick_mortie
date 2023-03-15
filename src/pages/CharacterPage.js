import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { paths } from "../paths";
import arrow_back from "../images/arrow_back.png"
import { fetchCharacterById } from "../chatactersAPI";
import styles from "./CharacterPage.module.css";

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
            <button className={styles.btn} onClick={handleClick}>
                <img className={styles.btn_img} src={arrow_back} alt="arrow-back" />
                Go back</button>
            {
                <div className={styles.character_container}>
                    <img className={styles.character_avatar} src={character.image} alt="avatar" />
                    <h1 className={styles.character_title}>{character.name}</h1>
                    <h3 className={styles.character_info}>Informations</h3>
                    <ul className={styles.character_info_list}>
                        <li className={styles.character_info_listItem}>
                            <h2 className={styles.character_info_title}>Gender</h2>
                            <p className={styles.character_info_desc}>{character.gender}</p>
                        </li>
                        <li className={styles.character_info_listItem}>
                            <h2 className={styles.character_info_title}>Status</h2>
                            <p className={styles.character_info_desc}>{character.status}</p>
                        </li>
                        <li className={styles.character_info_listItem}>
                            <h2 className={styles.character_info_title}>Specie</h2>
                            <p className={styles.character_info_desc}>{character.species}</p>
                        </li>
                        <li className={styles.character_info_listItem}>
                            <h2 className={styles.character_info_title}>Origin</h2>
                            <p className={styles.character_info_desc}>{character.origin?.name}</p>
                        </li>
                        <li className={styles.character_info_listItem}>
                            <h2 className={styles.character_info_title}>Type</h2>
                            <p className={styles.character_info_desc}>{character.type === "" ? "Unknown" : character.type}</p>
                        </li>
                    </ul>
                </div>}
        </div >
    )
}

export default CharacterPage;