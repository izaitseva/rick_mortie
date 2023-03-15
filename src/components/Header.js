import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import styles from "./Header.module.css"
import logo from "../images/logo.png"
// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import GoogleLogin from "react-google-login";
// import NotFound from "../pages/NotFound";

const Header = () => {

    const handleFailure = (result) => {
        alert(result)
    }
    const handleLogin = (googleData) => {
        console.log(googleData)
    }

    return (
        <nav>
            <div>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in, stranger"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'sigle_host_origin'}
                ></GoogleLogin>
            </div>
            < header >
                <NavLink to={paths.main}>
                    <img src={logo} alt="logo" className={styles.header} />
                </NavLink>
            </header>
        </nav >
    )
}

export default Header;