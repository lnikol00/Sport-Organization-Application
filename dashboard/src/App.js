import { Route, Routes } from 'react-router-dom';
import Layout from './context/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

      </Route>
    </Routes>
  );
}

export default App;
