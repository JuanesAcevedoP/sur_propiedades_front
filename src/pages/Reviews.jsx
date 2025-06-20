import { useEffect, useState } from "react";
import ReviewCard from "../components/review/ReviewCard";
import ReviewForm from "../components/review/ReviewForm";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Cargar reviews existentes
  const fetchReviews = async () => {
    try {
      const res = await fetch("https://surpropiedades-backend.onrender.com/api/reviews");
      const data = await res.json();
      setReviews(data.reverse()); // Mostrar la más reciente arriba
    } catch (err) {
      console.error("Error al obtener reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="reviews-page">
      <h2 className="section-title">Reseñas de nuestros clientes</h2>

      <div className="reviews-grid">
        <div className="left-panel">
          {!showForm ? (
            <button className="btn-toggle-form" onClick={() => setShowForm(true)}>
              Escribir una reseña
            </button>
          ) : (
            <ReviewForm
              onSuccess={() => {
                fetchReviews();
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>

        <div className="right-panel">
          {reviews.length === 0 ? (
            <p>No hay reseñas aún.</p>
          ) : (
            reviews.map((review) => <ReviewCard key={review._id} review={review} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
