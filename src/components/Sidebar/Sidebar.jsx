import { Link } from 'react-router-dom';
import ButtonEquipment from '../Button/ButtonEquipment/ButtonEquipment';
import ButtonType from '../Button/ButtonType/ButtonType';
import * as Styled from './Sidebar.styled';
import { useDispatch } from 'react-redux';
import { setModalContent } from '../../redux/serviceSlice';
import Icon from '../Icon/Icon';
import { getDataCamperThunk } from '../../redux/serviceThunks';

const Sidebar = () => {
  const dispatch = useDispatch();
  const endPoint = 'advert';

  const handleReset = () => {
    dispatch(getDataCamperThunk({ endPoint }));
  };

  const handleChang = event => {
    const values = event.target.value;
    if (values) {
      dispatch(
        setModalContent({
          recordData: { values },
        })
      );
    }
  };
  return (
    <>
      <Styled.SidebarWrapper>
        <Styled.TextLocation>Location</Styled.TextLocation>
        <Styled.SidebarInput
          type="text"
          onChange={handleChang}
          placeholder="find location"
        />
        <Styled.IconWrapper>
          <Icon
            styles={{
              fill: '#fff',
              stroke: '#212121',
            }}
            width={20}
            height={20}
            iconId="icon-map-pin"
          />
        </Styled.IconWrapper>

        <Styled.TextFilter>Filters</Styled.TextFilter>

        <Styled.TextVehicle>Vehicle equipment</Styled.TextVehicle>
        <ButtonEquipment />

        <Styled.TextVehicle>Vehicle Type</Styled.TextVehicle>
        <ButtonType />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Styled.SidebarButton type="button" onClick={handleReset}>
            Reset
          </Styled.SidebarButton>
          <div
            style={{
              background: '#e44848',
              width: '110px',
              padding: '18px',
              borderRadius: '100px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link to="/camper/favorite">Favorites</Link>
          </div>
        </div>
      </Styled.SidebarWrapper>
    </>
  );
};

export default Sidebar;
