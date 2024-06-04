import { Link } from 'react-router-dom';
import ButtonEquipment from '../Button/ButtonEquipment/ButtonEquipment';
import ButtonType from '../Button/ButtonType/ButtonType';
import * as Styled from './Sidebar.styled';

const Sidebar = () => {
  return (
    <div style={{ width: '360px' }}>
      <div style={{ marginBottom: '24px' }}>
        <p>Location</p>
        <input type="text" />
      </div>
      <p style={{ marginBottom: '24px' }}>Filters</p>
      <div>
        <p style={{ marginBottom: '24px' }}>Vehicle equipment</p>
        <ButtonEquipment />
      </div>
      <div>
        <p style={{ marginBottom: '24px' }}>Vehicle Type</p>
        <ButtonType />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Styled.SidebarButton type="button">Search</Styled.SidebarButton>
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
    </div>
  );
};

export default Sidebar;
