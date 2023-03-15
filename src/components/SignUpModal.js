// import { useEffect, useRef } from "react";

// export const SignUp = () => {

//     const signInDivRef = useRef(null);

//     function handleCallbackResponse(response) {
//         console.log("check:" + response.credentials);
//     }

//     useEffect(() => {
//         /* global google */
//         google.accounts.id.initialize({
//             client_id: "959854331354-telh3suplfm57nlldk6r9u4stpj3chq5.apps.googleusercontent.com",
//             callback: handleCallbackResponse
//         })

//         google.accounts.id.renderButton(
//             document.getElementById("signInDiv"),
//             { theme: "outline", size: "large" }
//         )
//     }, []);

//     return (
//         <div>
//             <div ref={signInDivRef}></div>
//         </div>
//     )
// }