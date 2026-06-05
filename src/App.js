import { Navigate, Route } from 'react-router';
import Footer from './UI/Footer/Footer';
import Header from './UI/Header/Header'
import Main from './pages/Main/Main'
import Recipes from './pages/Recipes/Recipes'
import { BrowserRouter, Routes } from 'react-router';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='*' element={<Navigate to={'/main'} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
