import { Link } from "react-router-dom";
import { paths } from "../paths";

export default function NotFound() {

    return (
        <div>
            <div>
                <Link to={paths.main}> Wubba Lubba Dub-Dub</Link>
            </div>
            <h1> Wake up! This is the wrong page </h1>
            <img src="https://bit.ly/3ymev88" alt="what?"></img>
        </div>
    )
}