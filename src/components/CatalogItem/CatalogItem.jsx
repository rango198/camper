import { useDispatch } from 'react-redux';
import { updateFavoriteThunk } from '../../redux/serviceThunks';
import { IconButton } from '@mui/material';
import CategoriesItam from '../CategoriesItem/CategoriesItam';
import * as Styled from './CatalogItem.styled';
import ImgComponent from '../ImgItem/ImgComponent';
import { setModalContent, setModalStatus } from '../../redux/serviceSlice';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();
  const endPoint = 'advert';

  const ShowModal = item => {
    dispatch(
      setModalContent({
        action: 'ModalContent',
        recordData: { ...item },
      })
    );
    dispatch(setModalStatus(true));
  };

  const result = item => {
    return !item.favorites;
  };

  const favoriteClick = () => {
    dispatch(
      updateFavoriteThunk({
        endPoint,
        params: { ...item, favorites: result(item) },
      })
    );
  };

  return (
    <Styled.WrraperCatalogItem>
      <ImgComponent item={item} />
      <Styled.WrrapWidth>
        <Styled.WrrapNameAndPice>
          <Styled.TextName>{item?.name}</Styled.TextName>
          <Styled.PriceStyled>
            <Styled.TextPrice>
              €
              {isNaN(Number(item?.price))
                ? '0.00'
                : Number(item?.price).toFixed(2)}
            </Styled.TextPrice>
            <IconButton
              type="button"
              sx={{ padding: 0 }}
              onClick={() => favoriteClick(item)}
            >
              {!item.favorites ? (
                <FavoriteIcon />
              ) : (
                <FavoriteIcon sx={{ color: '#e60a0a' }} />
              )}
            </IconButton>
          </Styled.PriceStyled>
        </Styled.WrrapNameAndPice>
        <Styled.WrraperRating>
          <StarIcon sx={{ color: '#ffb400' }} />
          <p>
            {item?.rating} ({item?.reviews?.length} reviews)
          </p>
          <p>{item?.location}</p>
        </Styled.WrraperRating>
        <Styled.WrraperDescription>
          {item?.description}
        </Styled.WrraperDescription>
        <CategoriesItam item={item} />
        <Styled.CatalogButton onClick={() => ShowModal(item)}>
          Show more
        </Styled.CatalogButton>
      </Styled.WrrapWidth>
    </Styled.WrraperCatalogItem>
  );
};

export default CatalogItem;
