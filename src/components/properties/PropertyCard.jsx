import React, { useState } from "react";
import {
  FaBath,
  FaBed,
  FaRulerCombined,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
  FaMoneyBillWave,
  FaHome,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const {
    image,
    title,
    type,
    city,
    sector,
    price,
    rent,
    bedrooms,
    bathrooms,
    area,
    advisorWhatsapp,
    code,
    available,
  } = property;

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);
  const whatsappURL = `https://wa.me/${advisorWhatsapp}`;

  const priceClass = rent ? "price-rent" : "price-sale";
  const priceIcon = rent ? <FaMoneyBillWave /> : <FaHome />;
  const priceLabel = rent
    ? `$${price.toLocaleString()} / mes`
    : `$${price.toLocaleString()}`;
  const badgeLabel = rent ? "En arriendo" : "En venta";
  const badgeClass = rent ? "badge-rent" : "badge-sale";

  return (
    <div className={`property-card ${!available ? "unavailable" : ""}`}>
      <div className="property-image-container">
        <img src={image} alt={title} className="property-image" />
        <span className={`badge-type ${badgeClass}`}>{badgeLabel}</span>
        {!available && <span className="badge-unavailable">No disponible</span>}
      </div>

      <div className="property-info">
        <h3>{title}</h3>
        <p className="property-type">{type}</p>
        <p className="location">
          {city} - {sector}
        </p>

        <p className={`price ${priceClass}`}>
          {priceIcon} {priceLabel}
        </p>

        <div className="features">
          <span>
            <FaBed /> {bedrooms}
          </span>
          <span>
            <FaBath /> {bathrooms}
          </span>
          <span>
            <FaRulerCombined /> {area} m²
          </span>
        </div>

        <button
          className="btn-more-info"
          onClick={toggleDetails}
          aria-expanded={showDetails}
          aria-label={
            showDetails
              ? "Ocultar información adicional"
              : "Ver más información"
          }
        >
          {showDetails ? <FaChevronUp /> : <FaChevronDown />}
          <span className="btn-text">More Info</span>
        </button>

        {showDetails && (
          <div className="property-extra">
            <p className="code">
              Código de propiedad: <strong>{code}</strong>
            </p>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp /> Contactar Asesor
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
