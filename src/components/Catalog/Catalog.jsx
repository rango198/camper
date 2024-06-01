import { useDispatch, useSelector } from 'react-redux';
import { getDataCamperThunk } from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';
import { selectDataCamper } from '../../redux/selector';

const Catalog = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';
  const mapData = useSelector(selectDataCamper);

  const handleClick = () => {
    dispatch(getDataCamperThunk({ endPoint }));
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <p> Catalog Component</p>{' '}
      <button type="button" onClick={handleClick} style={{ width: '100px' }}>
        getData
      </button>
      {mapData?.map(item => (
        <CatalogItem key={item._id} item={item} />
      ))}
    </div>
  );
};
export default Catalog;
