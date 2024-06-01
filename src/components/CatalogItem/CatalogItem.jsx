import { useDispatch } from 'react-redux';
import { updateFavoriteThunk } from '../../redux/serviceThunks';
import { IconButton } from '@mui/material';
import Icon from '../Icon/Icon';
import CategoriesItam from '../CategoriesItem/CategoriesItam';

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();
  const endPoint = 'advert';
  const updateData = {
    _id: '1',
    name: 'Road Bear C 23-25',
    price: 10000,
    rating: 4.5,
    location: 'Ukraine, Kyiv',
    adults: 3,
    children: 2,
    engine: 'petrol',
    transmission: 'automatic',
    form: 'alcove',
    length: '7.3m',
    width: '2.65m',
    height: '3.65m',
    tank: '208l',
    favorites: false,
    consumption: '30l/100km',
    description:
      "Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.",
    details: {
      airConditioner: 1,
      bathroom: 1,
      kitchen: 1,
      beds: 3,
      TV: 1,
      CD: 1,
      radio: 1,
      shower: 1,
      toilet: 1,
      freezer: 1,
      hob: 3,
      microwave: 1,
      gas: '35kg',
      water: '151l',
    },
    gallery: [
      'https://ftp.goit.study/img/campers-test-task/1-1.webp',
      'https://ftp.goit.study/img/campers-test-task/1-2.webp',
      'https://ftp.goit.study/img/campers-test-task/1-3.webp',
    ],
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment:
          'Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 4,
        comment:
          'Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.',
      },
    ],
  };

  const favoriteClick = () => {
    dispatch(updateFavoriteThunk({ endPoint, params: updateData }));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '888px',
        border: '1px solid #212121',
        borderRadius: '20px',
        padding: '24px',
        gap: '24px',
      }}
    >
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>{item.name}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p>
              €
              {isNaN(Number(item.price))
                ? '0.00'
                : Number(item.price).toFixed(2)}
            </p>
            <IconButton
              type="button"
              sx={{ padding: 0 }}
              onClick={favoriteClick}
            >
              <Icon
                styles={{
                  fill: '#212121',
                }}
                width={24}
                height={24}
                iconId={'hart'}
              />
            </IconButton>
          </div>
        </div>
        <div>
          <p>{item.rating}</p> <p>{item.location}</p>
        </div>
        <div
          style={{
            maxWidth: '526px',
            height: '20px',
            overflow: 'hidden',
            whiteSpace: 'nowrap', // Забороняє перенесення тексту на новий рядок
            textOverflow: 'ellipsis', // Додає три крапки в кінці обрізаного тексту
          }}
        >
          {item.description}
        </div>
        <CategoriesItam item={ item} />
        <button>Show more</button>
      </div>
    </div>
  );
};
export default CatalogItem;
