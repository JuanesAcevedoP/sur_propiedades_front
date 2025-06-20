import { API_BASE_URL } from "./config";

// Obtener reseñas
export const getReviews = async () => {
  const res = await fetch(`${API_BASE_URL}/reviews`);
  if (!res.ok) throw new Error("Error al cargar reseñas");
  return res.json();
};

// Crear una reseña
export const createReview = async (reviewData) => {
  const res = await fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData),
  });

  if (!res.ok) throw new Error("Error al enviar reseña");
  return res.json();
};
