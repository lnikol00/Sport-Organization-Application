import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from "./assets/Global.styled";
import Layout from './context/Layout';
import Dashobard from './pages/dashboard/Dashobard';
import Product from './pages/products/Product';
import Members from './pages/members/Members';
import Users from './pages/users/Users';
import News from './pages/news/News'
import Gallery from './pages/gallery/Gallery';
import Login from './pages/login/Login';
import RequireAuth from './context/RequiredAuth';


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route index element={<Dashobard />} />
            <Route path='news' element={<News />} />
            <Route path='products' element={<Product />} />
            <Route path='members' element={<Members />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='users' element={<Users />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
