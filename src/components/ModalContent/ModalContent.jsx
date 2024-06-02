import { useSelector } from 'react-redux';
import { selectModalContent } from '../../redux/selector';

const ModalContent = () => {
  const { recordData } = useSelector(selectModalContent);
  console.log(recordData);

  return (
    <div>
      <div>
        <p>{recordData?.name}</p>
        <p>
          {recordData?.reviews?.length} reviews, {recordData?.location}
        </p>
        <p>
          €
          {isNaN(Number(recordData?.price))
            ? '0.00'
            : Number(recordData?.price).toFixed(2)}
        </p>
      </div>
      <div>
        {recordData?.gallery?.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt="img"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
      <div>{recordData?.description}</div>
    </div>
  );
};

export default ModalContent;
