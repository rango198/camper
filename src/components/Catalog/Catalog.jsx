import { useDispatch, useSelector } from 'react-redux';
import { getDataCamperThunk } from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';
import { selectDataCamper } from '../../redux/selector';
import Sidebar from '../Sidebar/Sidebar';

const Catalog = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';
  const mapData = useSelector(selectDataCamper);

  const handleClick = () => {
    dispatch(getDataCamperThunk({ endPoint }));
  };
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '888px',
        }}
      >
        <button type="button" onClick={handleClick} style={{ width: '100px' }}>
          getData
        </button>
        {mapData?.map(item => (
          <CatalogItem key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Catalog;
