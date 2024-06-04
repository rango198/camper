import { useDispatch, useSelector } from 'react-redux';
import { selectDataCamper } from '../../redux/selector';
import { useEffect } from 'react';
import { getDataCamperThunk } from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';

const Favorite = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';

  useEffect(() => {
    dispatch(getDataCamperThunk({ endPoint }));
    // eslint-disable-next-line
  }, []);

  const favoriteData = useSelector(selectDataCamper);

  return (
    <div>
      {favoriteData?.map(item => {
        if (item.favorites === true) {
          return <CatalogItem key={item?._id} item={item} />;
        }
        return;
      })}
    </div>
  );
};

export default Favorite;
