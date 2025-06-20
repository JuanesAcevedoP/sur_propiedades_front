import PropertyCard from './PropertyCard';

const PropertyGrid = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p className="no-results">No se encontraron propiedades.</p>;
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
