import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { GlobalStyles } from "../assets/Global.styled";

const Layout = () => {
    return (
        <GlobalStyles>
            <Header />
            <Outlet />
        </GlobalStyles>
    )
}

export default Layout
