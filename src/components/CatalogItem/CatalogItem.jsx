const CatalogItem = ({ item }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '290px',
          height: '310px',
          border: '1px solid #21211',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <img
          src={item.gallery[0]}
          alt="react"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <div>
          <p>{item.name}</p> <p>{item.price}</p>
        </div>
        <div>
          <p>{item.rating}</p> <p>{item.location}</p>
        </div>
        <div
          style={{
            width: '300px',
            height: '20px',
            overflow: 'hidden', // Приховує текст, що виходить за межі
            whiteSpace: 'nowrap', // Забороняє перенесення тексту на новий рядок
            textOverflow: 'ellipsis', // Додає три крапки в кінці обрізаного тексту
          }}
        >
          {item.description}
        </div>
        <div>categories</div>
        <button>Show more</button>
      </div>
    </div>
  );
};
export default CatalogItem;
