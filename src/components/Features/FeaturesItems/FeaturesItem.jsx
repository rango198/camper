import Icon from '../../Icon/Icon';
import * as Style from './FeaturesItem.styled';
const FeaturesItem = ({ item }) => {
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
    {
      id: 'Conditioner',
      text: item?.details?.airConditioner,
      iconId: 'Conditioner',
    },
    {
      id: 'CD',
      text: `${item?.details?.CD} CD`,
      iconId: 'CD',
    },
    {
      id: 'radio',
      text: item?.details?.radio,
      iconId: 'Radio',
    },
    {
      id: 'hob',
      text: item?.details?.hob,
      iconId: 'hob',
    },
  ];

  return (
    <Style.WrrapFlex>
      {categories?.map(category => (
        <Style.WrapperFeaturesStyled key={category?.id}>
          <Style.FeaturesItem>
            <Icon
              styles={{
                fill: '#212121',
              }}
              width={20}
              height={20}
              iconId={category?.iconId}
            />
            <Style.ItemText>{category?.text}</Style.ItemText>
          </Style.FeaturesItem>
        </Style.WrapperFeaturesStyled>
      ))}
    </Style.WrrapFlex>
  );
};

export default FeaturesItem;
