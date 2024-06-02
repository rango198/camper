import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Modal from './Modal/Modal';
import { selectOpenModal } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { setModalStatus } from '../redux/serviceSlice';
import ModalContent from './ModalContent/ModalContent';

const HomePage = lazy(() => import('../page/homePage/HomePage'));
const FavoritePage = lazy(() => import('../page/favoritesPage/FavoritePage'));
const CatalogPage = lazy(() => import('../page/catalogPage/CatalogPage'));

const App = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectOpenModal);

  const close = () => {
    dispatch(setModalStatus(false));
  };
  return (
    <>
      <Routes>
        <Route path="/camper" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/camper/favorite" element={<FavoritePage />} />
          <Route path="/camper/catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
      <Modal show={open} onClose={close}>
        <ModalContent />
      </Modal>
    </>
  );
};
export default App;
