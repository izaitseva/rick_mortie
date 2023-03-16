import { Outlet } from "react-router";
import { LogIn } from "./LogIn";

export const SharedLayout = () => {

    return (
        <div className="container">
            <LogIn />
            <Outlet />
        </div>
    )

}