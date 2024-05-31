import { useDispatch, useSelector } from 'react-redux';
import {
  getDataCamperThunk,
  updateFavoriteThunk,
} from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';
import { selectDataCamper } from '../../redux/selector';

const Catalog = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';
  const mapData = useSelector(selectDataCamper);
  const updateData = {
    name: 'name 1',
    price: 12,
    rating: 74,
    location: 'location 1',
    adults: 79,
    children: 87,
    engine: 'engine 1',
    transmission: 'transmission 1',
    form: 'form 1',
    length: 'length 1',
    width: 'width 1',
    height: 'height 1',
    tank: 'tank 1',
    consumption: 'consumption 1',
    description: 'description 1',
    details: {},
    galery: [],
    reviews: [],
    favorites: true,
    _id: '1',
  };

  const favoriteClick = () => {
    dispatch(updateFavoriteThunk({ endPoint, params: updateData }));
  };

  const handleClick = () => {
    dispatch(getDataCamperThunk({ endPoint }));
  };
  return (
    <div>
      <p> Catalog Component</p>{' '}
      <button type="button" onClick={handleClick}>
        getData
      </button>
      <button type="button" onClick={favoriteClick}>
        getFavorites
      </button>
      {mapData?.map(item => (
        <CatalogItem />
      ))}
    </div>
  );
};
export default Catalog;
