import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import logo from "../images/logo.png"

const Header = () => {

    return (
        <nav>
            <header>
                <NavLink to={paths.main}>
                        <img src={logo} alt="logo" />
                </NavLink>
            </header>
        </nav>
    )
}

export default Header;