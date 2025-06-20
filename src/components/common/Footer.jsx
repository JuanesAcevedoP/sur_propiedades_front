import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Contáctanos</h4>
        <a href="https://wa.me/573195476853" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp: +57 319 547 6853
        </a>
      </div>
      <div className="footer-column">
        <h4>Redes Sociales</h4>
        <a href="https://www.instagram.com/sur_propiedadesinmo/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> @sur_propiedadesinmo
        </a>
      </div>
      <div className="footer-column">
        <h4>Dirección</h4>
        <a href="https://www.google.com/maps/search/?api=1&query=Calle%2036sur%20%2342-54%20Envigado%2C%20Colombia" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt /> Cl. 36 Sur #42 - 54, Envigado
        </a>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Sur Propiedades. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
