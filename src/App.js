import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {!isHomePage && <Header />}
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers' element={<AllBeers />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/beers/:id' element={<BeerDetails />} />
      <Route path='/new-beer' element={<NewBeer />} />
      <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
