import React from 'react';
import Icon from '../../Icon/Icon';
import { useDispatch } from 'react-redux';
import { setDataCamper } from '../../../redux/serviceSlice';
import * as Styled from './ButtonEquipment.styled';

const ButtonEquipment = () => {
  const dispatch = useDispatch();

  const filterClick = (key, value) => {
    dispatch(setDataCamper({ key, value }));
  };

  const data = [
    { title: 'AC', iconId: 'AC', key: 'airConditioner', value: 1 },
    {
      title: 'Automatic',
      iconId: 'Automatic',
      key: 'transmission',
      value: 'automatic',
    },
    { title: 'Kitchen', iconId: 'kitchen', key: 'kitchen', value: 1 },
    { title: 'TV', iconId: 'TV', key: 'TV', value: 0 },
    { title: 'Shower', iconId: 'Shower', key: 'shower', value: 1 },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        width: '360px',
        flexWrap: 'wrap',
        padding: '24px 0',
        borderTop: '1px solid #8a848471',
      }}
    >
      {data.map(item => (
        <div key={item.title}>
          <Styled.Button
            type="button"
            onClick={() => filterClick(item.key, item.value)}
          >
            <Icon
              styles={{
                fill: '#212121',
              }}
              width={24}
              height={24}
              iconId={item.iconId}
            />
            {item.title}
          </Styled.Button>
        </div>
      ))}
    </div>
  );
};

export default ButtonEquipment;
