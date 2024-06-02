import { useSelector } from 'react-redux';
import { selectModalContent } from '../../redux/selector';
import ModalContent from '../ModalContent/ModalContent';

const RenderModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent.action) {
    case 'ModalContent':
      return <ModalContent />;

    default:
      return null;
  }
};

export default RenderModalContent;
