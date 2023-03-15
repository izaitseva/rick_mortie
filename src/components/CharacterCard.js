import { generatePath, NavLink, useLocation } from "react-router-dom";
import { paths } from "../paths";
import styles from "./CharacteCard.module.css";

const CharacterCard = ({ characters }) => {

    const location = useLocation();

    return (
        <>
            {
                characters.map(character => (
                    <li className={styles.list_item} key={character.id}>
                        <NavLink className={styles.link} state={{ from: location }} to={generatePath(paths.characterPage, { id: character.id })}>
                            <img className={styles.avatar} src={character.image} alt="avatar" />
                            <div className={styles.listItem_info} key={character.id}>
                                <h2 title={character.name} className={styles.listItem_title}> {character.name}</h2>
                                <p className={styles.listItem_desc}>{character.species}</p>
                            </div>
                        </NavLink>
                    </li >
                ))
            }
        </>
    )
}

export default CharacterCard;