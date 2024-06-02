import ButtonEquipment from '../Button/ButtonEquipment/ButtonEquipment';
import ButtonType from '../Button/ButtonType/ButtonType';

const Sidebar = () => {
  return (
    <div>
      <div>
        <p>Location</p>
        <input type="text" />
      </div>
      <div>
        <p>Vehicle equipment</p>
        <ButtonEquipment />
      </div>
      <div>
        <p>Vehicle Type</p>
        <ButtonType />
      </div>
    </div>
  );
};

export default Sidebar;
