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
      style={{ display: 'flex', gap: '8px', width: '360px', flexWrap: 'wrap' }}
    >
      {data.map(item => (
        <div key={item.title}>
          <button
            type="button"
            style={{
              width: '97px',
              display: 'flex',
              height: '95px',
              padding: '17px 18px',
              flexDirection: 'column',

              gap: '8px',
              border: '1px solid #5a5757',
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
