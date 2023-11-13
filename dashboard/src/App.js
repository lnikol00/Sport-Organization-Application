import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from "./assets/Global.styled";
import Layout from './context/Layout';
import Dashobard from './pages/dashboard/Dashobard';
import Product from './pages/products/Product';
import Members from './pages/members/Members';
import Users from './pages/users/Users';
import News from './pages/news/News'
import Gallery from './pages/gallery/Gallery';


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashobard />} />
          <Route path='news' element={<News />} />
          <Route path='products' element={<Product />} />
          <Route path='members' element={<Members />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
