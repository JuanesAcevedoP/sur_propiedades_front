import React, { useEffect, useState } from 'react';
import PropertyCard from '../properties/PropertyCard';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch('https://surpropiedades-backend.onrender.com/api/properties/featured');
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error('Error al cargar propiedades destacadas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="featured-section">

      {loading ? (
        <p>Cargando propiedades...</p>
      ) : properties.length === 0 ? (
        <p>No hay propiedades destacadas por ahora.</p>
      ) : (
        <div className="featured-grid">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProperties;
