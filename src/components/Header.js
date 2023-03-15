import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import styles from "./Header.module.css"
import logo from "../images/logo.png"

const Header = () => {

    return (
        <nav>
            <header>
                <NavLink to={paths.main}>
                        <img src={logo} alt="logo" className={styles.header}/>
                </NavLink>
            </header>
        </nav>
    )
}

export default Header;