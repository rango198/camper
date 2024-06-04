import { useDispatch, useSelector } from 'react-redux';
import { getDataCamperThunk } from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';
import {
  selectDataCamper,
  selectIsLoading,
  selectModalContent,
} from '../../redux/selector';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import * as Style from './Catalog.styled';
import { filter } from '../services/services';
import Loader from '../Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';

  const mapData = useSelector(selectDataCamper);
  const { recordData } = useSelector(selectModalContent);
  const isLoading = useSelector(selectIsLoading);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    dispatch(getDataCamperThunk({ endPoint }));
    // eslint-disable-next-line
  }, []);

  const endIndex = itemsPerPage;
  const displayedItems = filter(recordData, mapData)?.slice(0, endIndex);

  const loadMoreItems = () => {
    setItemsPerPage(prevItemsPerPage => prevItemsPerPage + 4);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Style.Wrraper>
          <Sidebar />
          <Style.WrrapCatalog>
            {displayedItems?.map(item => (
              <CatalogItem key={item?._id} item={item} />
            ))}
            {displayedItems?.length === itemsPerPage && (
              <Style.LoadMoreButton onClick={loadMoreItems}>
                Load More
              </Style.LoadMoreButton>
            )}
          </Style.WrrapCatalog>
        </Style.Wrraper>
      )}
    </>
  );
};

export default Catalog;
