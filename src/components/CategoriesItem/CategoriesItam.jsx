import Icon from '../Icon/Icon';
import * as Styled from './CategoriesItem.styled';

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
      iconId: 'AC',
    },
  ];

  return (
    <Styled.WrrapFlex>
      {categories?.map(category => (
        <Styled.WrapperCategoriesStyled key={category?.id}>
          <Styled.CategoriesItem>
            <Icon
              styles={{
                stroke: '#212112',
              }}
              width={20}
              height={20}
              iconId={category.iconId}
            />

            <Styled.ItemText>{category?.text}</Styled.ItemText>
          </Styled.CategoriesItem>
        </Styled.WrapperCategoriesStyled>
      ))}
    </Styled.WrrapFlex>
  );
};

export default CategoriesItem;
