import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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