import * as Style from './Details.styled';

const Details = ({ item }) => {
  const fields = [
    { label: 'Form', value: item.form },
    { label: 'Length', value: item.length },
    { label: 'Width', value: item.width },
    { label: 'Height', value: item.height },
    { label: 'Tank', value: item.tank },
    { label: 'Consumption', value: item.consumption },
  ];

  return (
    <>
      <Style.TitleDetails>Vehicle details</Style.TitleDetails>
      <Style.WrrapTextDetails>
        {fields.map((field, index) => (
          <Style.TextDetails key={index}>
            <span>{field.label}</span>
            <span>{field.value}</span>
          </Style.TextDetails>
        ))}
      </Style.WrrapTextDetails>
    </>
  );
};

export default Details;
