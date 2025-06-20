import { FaUserCircle, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="review-card">
      <div className="review-header">
        <FaUserCircle className="review-icon" />
        <div>
          <h4>{review.name}</h4>
          <small>{formattedDate}</small>
        </div>
      </div>

      <div className="review-rating">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>

      <p className="review-text">"{review.comment}"</p>
    </div>
  );
};

export default ReviewCard;
