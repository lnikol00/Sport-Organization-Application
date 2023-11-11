import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components//footer/Footer";

const Layout = () => {
    return (
        <main className="App" >
            <Header />
            <div className='main-container'>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Layout