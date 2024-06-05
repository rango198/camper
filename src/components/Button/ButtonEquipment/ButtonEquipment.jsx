import React from 'react';
import Icon from '../../Icon/Icon';

const ButtonEquipment = () => {
  const data = [
    { title: 'AC', iconId: 'AC' },
    { title: 'Automatic', iconId: 'Automatic' },
    { title: 'Kitchen', iconId: 'kitchen' },
    { title: 'TV', iconId: 'TV' },
    { title: 'Shower', iconId: 'Shower' },
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
          <button
            type="button"
            style={{
              width: '110px',
              display: 'flex',
              height: '95px',
              gap: '8px',
              padding: '17px 18px',
              flexDirection: 'column',
              border: '1px solid #5a57579e',
              borderRadius: '10px',
              alignItems: 'center',
            }}
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
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonEquipment;
