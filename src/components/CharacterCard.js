import { generatePath, NavLink, useLocation } from "react-router-dom";
import { paths } from "../paths";

const CharacterCard = ({ characters }) => {

    const location = useLocation();

    return (
        <>
            {
                characters.map(character => (
                    <li key={character.id}>
                        <NavLink state={{ from: location }} to={generatePath(paths.characterPage, { id: character.id })}>
                            <div key={character.id}>
                                <img src={character.image} alt="" />
                                < h3 > {character.name}</h3>
                                <p>{character.species}</p>
                            </div>
                        </NavLink>
                    </li >
                ))
            }
        </>
    )
}

export default CharacterCard;