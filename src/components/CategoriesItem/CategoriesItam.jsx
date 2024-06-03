import Icon from '../Icon/Icon';
import * as Styled from './CategoriesItem.styled';
import AirIcon from '@mui/icons-material/Air';

const CategoriesItem = ({ item }) => {
  const categories = [
    { id: 'adults', text: `${item?.adults} adults`, iconId: 'adults' },
    { id: 'transmission', text: item?.transmission, iconId: 'Automatic' },
    { id: 'engine', text: item?.engine, iconId: 'Petrol' },
    {
      id: 'kitchen',
      text: `${item?.details?.kitchen} kitchen`,
      iconId: 'kitchen',
    },
    { id: 'beds', text: `${item?.details?.beds} beds`, iconId: 'beds' },
    {
      id: 'airConditioner',
      text: `${item?.details?.airConditioner} AC`,
      iconId: 'AirIcon',
    },
  ];

  const renderIcon = iconId => {
    if (iconId === 'AirIcon') {
      return <AirIcon style={{ fill: '#212121', width: 20, height: 20 }} />;
    }
    return (
      <Icon
        styles={{
          fill: '#212121',
        }}
        width={20}
        height={20}
        iconId={iconId}
      />
    );
  };

  return (
    <Styled.WrrapFlex>
      {categories?.map(category => (
        <Styled.WrapperCategoriesStyled key={category?.id}>
          <Styled.CategoriesItem>
            {renderIcon(category.iconId)}
            <Styled.ItemText>{category?.text}</Styled.ItemText>
          </Styled.CategoriesItem>
        </Styled.WrapperCategoriesStyled>
      ))}
    </Styled.WrrapFlex>
  );
};

export default CategoriesItem;
