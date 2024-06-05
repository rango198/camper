import { useDispatch, useSelector } from 'react-redux';
import { selectDataCamper } from '../../redux/selector';
import { useEffect } from 'react';
import { getDataCamperThunk } from '../../redux/serviceThunks';
import CatalogItem from '../CatalogItem/CatalogItem';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Favorite.styled';

const Favorite = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getDataCamperThunk({ endPoint }));
    // eslint-disable-next-line
  }, []);

  const favoriteData = useSelector(selectDataCamper);

  return (
    <Styled.WrraperFavorites>
      <Styled.FavoriteButton type="button" onClick={goBack}>
        Go back
      </Styled.FavoriteButton>
      <Styled.ListFavorites>
        {favoriteData?.map(item => {
          if (item.favorites === true) {
            return <CatalogItem key={item?._id} item={item} />;
          }
          return null;
        })}
      </Styled.ListFavorites>
    </Styled.WrraperFavorites>
  );
};

export default Favorite;
