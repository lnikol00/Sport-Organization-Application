import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import FanShop from './pages/FanShop/FanShop';
import Info from './pages/info/Info';
import Gallery from './pages/Galery/Gallery';
import Speeds from './pages/Speeds/Speeds';
import News from './pages/home/News/News';
import Footer from './components/footer/Footer';
import Cart from './pages/FanShop/Cart';
import Product from './pages/FanShop/Product';

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ScrollToTop from './components/Scroll/ScrollToTop';



function App() {


  return (
    <div className="App">
      <Router >
        <Header />
        <div className='main-container'>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route exact path='info' element={<Info />} />
            <Route exact path="fan-shop/cart" element={<Cart />} />
            <Route exact path='fan-shop' element={<FanShop />} />
            <Route exact path='gallery' element={<Gallery />} />
            <Route exact path='speeds' element={<Speeds />} />
            <Route exact path="news/:id" element={<News />} />
            <Route exact path="fan-shop/product/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
