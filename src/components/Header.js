import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import styles from "./Header.module.css"
import logo from "../images/logo.png"
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Header = () => {

    const [user, setUser] = useState('');

    function handleCallbackResponse(response) {
        console.log("ID:" + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        console.log(userObject.name);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "959854331354-telh3suplfm57nlldk6r9u4stpj3chq5.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, []);

    function handleSignOut(e) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    const onClick = (e) => {
        handleSignOut(e)
    }

    return (
        <nav>
            <div>
                <small>Hey, stranger!</small>
                <div id="signInDiv"></div>
            </div>
            {user &&
                <div>
                    <img src={user.picture} alt="user avatar"></img>
                    <small>Hello, {user.name}!</small>
                </div>
            }
            {Object.keys(user).length !== 0 &&
                <button onClick={onClick}>Sign Out</button>
            }
            <header>
                <NavLink to={paths.main}>
                    <img src={logo} alt="logo" className={styles.header} />
                </NavLink>
            </header>
        </nav>
    )
}

export default Header;