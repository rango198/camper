import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../page/homePage/HomePage'));
const FavoritePage = lazy(() => import('../page/favoritesPage/FavoritePage'));
const CatalogPage = lazy(() => import('../page/catalogPage/CatalogPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/camper" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/camper/favorite" element={<FavoritePage />} />
          <Route path="/camper/catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
