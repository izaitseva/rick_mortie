import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import styles from "./Login.module.css";

export const LogIn = () => {
    const [user, setUser] = useState("");

    function handleCallbackResponse(response) {
        console.log("check:" + response.credential);
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        document.getElementById("user-image").hidden = true;
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
        google.accounts.id.prompt();
    }, []);

    return (
        <div className={styles.signIn_container}>
            {user &&
                <div className={styles.user_info}>
                    <img id="user-image" className={styles.user_pic} src={user.picture} alt="hey"></img>
                    <h3>{user.name}</h3>
                </div>
            }
            {Object.keys(user).length != 0 &&
                <div>
                    <button className={styles.signOut_btn} onClick={(e) => handleSignOut(e)}>Sign Out</button>
                </div>
            }
            <div className={styles.signIn_btn} id="signInDiv"></div>
        </div>
    )
}