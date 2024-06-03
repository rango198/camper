import { useSelector } from 'react-redux';
import { selectModalContent } from '../../redux/selector';
import ReviewsItem from './ReviewsItem/ReviewsItem';
import Form from '../Form/Form';
import { WrrapForm } from '../Features/Features.styled';

const Reviews = () => {
  const { recordData } = useSelector(selectModalContent);
  return (
    <div style={{ display: 'flex' }}>
      <ReviewsItem item={recordData} />
      <WrrapForm>
        <Form />
      </WrrapForm>
    </div>
  );
};

export default Reviews;
