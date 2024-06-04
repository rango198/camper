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
      <div>
        <Styled.SidebarButton type="button">Search</Styled.SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
