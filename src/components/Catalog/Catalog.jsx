import { useDispatch, useSelector } from 'react-redux';
import { getDataCamperThunk } from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';
import { selectDataCamper } from '../../redux/selector';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';

  const mapData = useSelector(selectDataCamper);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    dispatch(getDataCamperThunk({ endPoint }));
  }, [dispatch]);

  const endIndex = itemsPerPage;
  const displayedItems = mapData?.slice(0, endIndex);

  const loadMoreItems = () => {
    setItemsPerPage(prevItemsPerPage => prevItemsPerPage + 4);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '55px' }}>
      <Sidebar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '888px',
        }}
      >
        {displayedItems?.map(item => (
          <CatalogItem key={item?._id} item={item} />
        ))}
        {mapData?.length > itemsPerPage && (
          <button onClick={loadMoreItems}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default Catalog;
