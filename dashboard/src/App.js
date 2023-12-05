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
import CreateProduct from './pages/products/CreateProduct';
import CreateUser from './pages/users/CreateUser';
import CreatePhoto from './pages/gallery/CreatePhoto';
import CreateMember from './pages/members/CreateMember';
import CreateNews from './pages/news/CreateNews';


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route index element={<Dashobard />} />
            <Route path='news' element={<News />} />
            <Route path='news/create' element={<CreateNews />} />
            <Route path='products' element={<Product />} />
            <Route path='products/create' element={<CreateProduct />} />
            <Route path='members' element={<Members />} />
            <Route path='members/create' element={<CreateMember />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='gallery/create' element={<CreatePhoto />} />
            <Route path='users' element={<Users />} />
            <Route path='users/create' element={<CreateUser />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
