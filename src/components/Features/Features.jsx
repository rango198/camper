import { useSelector } from 'react-redux';
import FeaturesItem from './FeaturesItems/FeaturesItem';
import { selectModalContent } from '../../redux/selector';
import Form from '../Form/Form';
import * as Style from './Features.styled';
import Details from './Details/Details';

const Features = () => {
  const { recordData } = useSelector(selectModalContent);
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FeaturesItem item={recordData} />
        <Details item={recordData} />
      </div>
      <Style.WrrapForm>
        <Style.TextHeaderForm>Book your campervan now</Style.TextHeaderForm>
        <Style.TextForm>
          Stay connected! We are always ready to help you.
        </Style.TextForm>
        <Form />
      </Style.WrrapForm>
    </div>
  );
};

export default Features;
