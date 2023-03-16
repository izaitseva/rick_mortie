import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import styles from "./Header.module.css"
import logo from "../images/logo.svg"

const Header = () => {

    return (
        <nav className={styles.header_container}>
            < header >
                <NavLink to={paths.main}>
                    <img src={logo} alt="logo" className={styles.header_img} />
                </NavLink>
            </header>
        </nav >
    )
}

export default Header;