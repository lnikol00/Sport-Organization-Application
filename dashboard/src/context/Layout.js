import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/header/Sidebar";

const Layout = () => {
    return (
        <>
            <Sidebar>
                <Header />
                <Outlet />
            </Sidebar>
        </>
    )
}

export default Layout
