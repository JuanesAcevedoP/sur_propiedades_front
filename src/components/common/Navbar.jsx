import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [showFloatingLogo, setShowFloatingLogo] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowFloatingLogo(false); // Mostrar navbar completa
    } else {
      setShowFloatingLogo(true); // Mostrar solo logo flotante
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {/* Logo flotante */}
      {showFloatingLogo && (
        <div className="floating-logo" onClick={toggleSidebar}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      )}

      {/* Navbar visible al inicio */}
      {!showFloatingLogo && (
        <header className="top-navbar">
          <div className="navbar-container">
            <img src={logo} alt="Logo" className="logo" />
            <nav className="navbar-links">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
              <NavLink to="/search" className="nav-link">Búsqueda</NavLink>
              <NavLink to="/properties" className="nav-link">Propiedades</NavLink>
              <NavLink to="/reviews" className="nav-link">Reviews</NavLink>
            </nav>
          </div>
        </header>
      )}

      {/* Menú lateral */}
      <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <nav className="sidebar-links">
          <NavLink to="/" className="nav-link" onClick={toggleSidebar}>Inicio</NavLink>
          <NavLink to="/search" className="nav-link" onClick={toggleSidebar}>Búsqueda</NavLink>
          <NavLink to="/properties" className="nav-link" onClick={toggleSidebar}>Propiedades</NavLink>
          <NavLink to="/reviews" className="nav-link" onClick={toggleSidebar}>Reviews</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
