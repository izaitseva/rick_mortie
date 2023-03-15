import { Outlet } from "react-router";

export const SharedLayout = () => {

    return (
        <div className="container">
            <Outlet />
        </div>
    )

}