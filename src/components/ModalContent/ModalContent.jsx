import { useSelector } from 'react-redux';
import { selectModalContent } from '../../redux/selector';
import * as Style from './ModalContent.styled';
import Tabs from '../Tabs/Tabs';

const ModalContent = () => {
  const { recordData } = useSelector(selectModalContent);

  return (
    <div>
      <div>
        <Style.TextName>{recordData?.name}</Style.TextName>
        <Style.WrraperRating>
          <p>
            {recordData?.reviews?.length} reviews, {recordData?.location}
          </p>
        </Style.WrraperRating>
        <Style.TextPrice>
          €
          {isNaN(Number(recordData?.price))
            ? '0.00'
            : Number(recordData?.price).toFixed(2)}
        </Style.TextPrice>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        {recordData?.gallery?.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: '290px',
              height: '310px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${item})`,
            }}
          ></div>
        ))}
      </div>
      <div>{recordData?.description}</div>
      <div>
        <Tabs />
      </div>
    </div>
  );
};

export default ModalContent;
