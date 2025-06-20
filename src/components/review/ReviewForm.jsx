import { useState } from "react";

const ReviewForm = ({ onSuccess, onCancel }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("5");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!name.trim() || !comment.trim() || !rating) {
      setError("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://surpropiedades-backend.onrender.com/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, comment, rating: parseInt(rating) }),
      });

      if (!res.ok) throw new Error("Error al enviar la reseña");

      setName("");
      setComment("");
      setRating("5");
      onSuccess();
    } catch (err) {
      setError("Ocurrió un error al enviar la reseña.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Déjanos tu opinión</h3>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        rows="4"
        placeholder="Tu reseña"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="form-select"
      >
        <option value="5">⭐⭐⭐⭐⭐ - Excelente</option>
        <option value="4">⭐⭐⭐⭐ - Muy buena</option>
        <option value="3">⭐⭐⭐ - Buena</option>
        <option value="2">⭐⭐ - Regular</option>
        <option value="1">⭐ - Mala</option>
      </select>

      <div className="form-actions">
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
