import { useSelector } from 'react-redux';
import { selectModalContent } from '../../redux/selector';
import * as Style from './ModalContent.styled';
import Tabs from '../Tabs/Tabs';
import Icon from '../Icon/Icon';

const ModalContent = () => {
  const { recordData } = useSelector(selectModalContent);

  return (
    <div>
      <div>
        <Style.TextName>{recordData?.name}</Style.TextName>
        <Style.WrraperRating>
          <Style.ReviewsText>
            <Icon
              styles={{
                fill: '#FFC531',
              }}
              width={20}
              height={20}
              iconId="star"
            />
            {recordData?.reviews?.length} reviews, {recordData?.location}
          </Style.ReviewsText>
        </Style.WrraperRating>
        <Style.TextPrice>
          €
          {isNaN(Number(recordData?.price))
            ? '0.00'
            : Number(recordData?.price).toFixed(2)}
        </Style.TextPrice>
      </div>
      <Style.WrrapBoxImage>
        {recordData?.gallery?.map((item, index) => (
          <Style.BoxdImage key={index} src={item} alt={item} />
        ))}
      </Style.WrrapBoxImage>
      <Style.Description>{recordData?.description}</Style.Description>
      <>
        <Tabs />
      </>
    </div>
  );
};

export default ModalContent;
