import gavno from '../../logo/logo192.png';
const CatalogItem = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={gavno} alt="react" />
      </div>
      <div>
        <div>name, price</div>
        <div>favoriteStar, Location</div>
        <div>descripyion</div>
        <div>categories</div>
        <button>Show more</button>
      </div>
    </div>
  );
};
export default CatalogItem;
