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
import Login from './pages/login/Login';
import { AnimatePresence } from 'framer-motion';
import Shipping from './pages/fan-shop/shipping/Shipping';
import Payment from './pages/fan-shop/shipping/Payment'
import PlaceOrderScreen from './pages/fan-shop/shipping/PlaceOrderScreen'
import OrderScreen from './pages/fan-shop/shipping/OrderScreen';
import RequireAuth from './components/context/RequireAuth';


function App() {

  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/:id" element={<News />} />
          <Route path='info' element={<Info />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='products' element={<Shop />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart/:id?" element={<Cart />} />
          <Route element={<RequireAuth />}>
            <Route path='shipping' element={<Shipping />} />
            <Route path='payment' element={<Payment />} />
            <Route path='placeorder' element={<PlaceOrderScreen />} />
            <Route path='order/:id' element={<OrderScreen />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
