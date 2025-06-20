import { useEffect, useState } from "react";
import PropertyCard from "../components/properties/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("https://surpropiedades-backend.onrender.com/api/properties");
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Error al obtener propiedades:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="properties-page">
      <h2 className="section-title">Todas las Propiedades</h2>

      {loading ? (
        <p>Cargando propiedades...</p>
      ) : properties.length === 0 ? (
        <p>No hay propiedades disponibles.</p>
      ) : (
        <div className="property-grid">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
