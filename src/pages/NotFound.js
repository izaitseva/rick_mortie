import { Link } from "react-router-dom";
import { paths } from "../paths";
import styles from "./NotFound.module.css";

export default function NotFound() {

    return (
        <div>
            <div>
                <Link className={styles.gohome_btn} to={paths.main}> Go home </Link>
            </div>
            <h1> Wake up! This is the wrong page </h1>
            <img src="https://bit.ly/3ymev88" alt="what?"></img>
        </div>
    )
}