import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../page/homePage/HomePage'));
const FavoritePage = lazy(() => import('../page/favoritesPage/FavoritePage'));
const CatalogPage = lazy(() => import('../page/catalogPage/CatalogPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </>
  );
};
