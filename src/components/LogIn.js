import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import styles from "./Login.module.css";

export const LogIn = () => {
    const [user, setUser] = useState("");

    function handleCallbackResponse(response) {
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        localStorage.setItem("authCredentials", response.credential);
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        document.getElementById("user-image").hidden = true;
        localStorage.removeItem("authCredentials");
    }
    
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "959854331354-telh3suplfm57nlldk6r9u4stpj3chq5.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        const storedCredentials = localStorage.getItem("authCredentials");
        if (storedCredentials) {
            const userObject = jwt_decode(storedCredentials);
            setUser(userObject);
            document.getElementById("signInDiv").hidden = true;
        } else {
            google.accounts.id.prompt();
        }

        const resizeButton = () => {
            const width = window.innerWidth;
            const button = document.getElementById("signInDiv");
            if (width <= 414) {
                google.accounts.id.renderButton(button, { theme: "outline", size: "small" });
            } else {
                google.accounts.id.renderButton(button, { theme: "outline", size: "large" });
            }
        };

        resizeButton();

        window.addEventListener("resize", resizeButton);

        return () => {
            window.removeEventListener("resize", resizeButton);
        };
    }, []);

    return (
        <div className={styles.signIn_container}>
            <div className={styles.signOut_container}>
                {user &&
                    <div className={styles.user_info}>
                        <img id="user-image" className={styles.user_pic} src={user.picture} alt="user pic"></img>
                        <h3 className={styles.user_name}>{user.name}</h3>
                    </div>
                }
                {Object.keys(user).length !== 0 &&
                    <div>
                        <button className={styles.signOut_btn} onClick={(e) => handleSignOut(e)}>Sign Out</button>
                    </div>
                }
            </div>
            <div className={styles.signIn_btn} id="signInDiv"></div>
        </div>
    )
    // const clientId = "959854331354-telh3suplfm57nlldk6r9u4stpj3chq5.apps.googleusercontent.com"

    // return (
    //     < GoogleOAuthProvider clientId={clientId} >
    //         <GoogleLogin
    //             onSuccess={credentialResponse => {
    //                 console.log(credentialResponse);
    //             }}
    //             onError={() => {
    //                 console.log('Login Failed');
    //             }}
    //         />
    //     </GoogleOAuthProvider>
    // )
}