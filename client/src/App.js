import './App.css';

import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Gallery from './pages/gallery/Gallery';
import News from './pages/home/news/News';
import Cart from './pages/fan-shop/Cart';
import NotFound from './pages/not-found/NotFound';
import SingleProduct from './pages/fan-shop/SingleProduct';
import Shop from './pages/fan-shop/Shop';
import Layout from './components/context/Layout';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="news/:id" element={<News />} />
          <Route exact path='info' element={<Info />} />
          <Route exact path='gallery' element={<Gallery />} />
          <Route exact path='products' element={<Shop />} />
          <Route exact path="products/:id" element={<SingleProduct />} />
          <Route exact path="cart/:id?" element={<Cart />} />
          <Route exact path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
