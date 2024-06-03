import StarIcon from '@mui/icons-material/Star';

const ReviewsItem = ({ item }) => {
  return (
    <div style={{ width: '430px' }}>
      {item.reviews.map((itemArr, index) => (
        <div key={index}>
          <p>{itemArr.reviewer_name}</p>
          <div>
            {[...Array(itemArr.reviewer_rating)].map((_, i) => (
              <StarIcon key={i} sx={{ color: '#ffb400' }} />
            ))}
          </div>
          <p>{itemArr.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsItem;
