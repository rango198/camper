import { useDispatch } from 'react-redux';
import { updateFavoriteThunk } from '../../redux/serviceThunks';
import { IconButton } from '@mui/material';
import Icon from '../Icon/Icon';
import CategoriesItam from '../CategoriesItem/CategoriesItam';
import * as Styled from './CatalogItem.styled';
import ImgComponent from '../ImgItem/ImgComponent';
import { setModalContent, setModalStatus } from '../../redux/serviceSlice';
import StarIcon from '@mui/icons-material/Star';

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

  const favoriteClick = () => {
    dispatch(updateFavoriteThunk({ endPoint, params: item }));
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
              onClick={favoriteClick}
            >
              <Icon
                styles={{
                  fill: '#212121',
                }}
                width={24}
                height={24}
                iconId={'hart'}
              />
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
        <button onClick={() => ShowModal(item)}>Show more</button>
      </Styled.WrrapWidth>
    </Styled.WrraperCatalogItem>
  );
};

export default CatalogItem;
