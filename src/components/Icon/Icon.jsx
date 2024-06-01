import sprite from '../../logo/sprite.svg';

const Icon = ({ styles, width, height, iconId }) => {
  return (
    <svg style={styles} width={width} height={height}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

export default Icon;
