// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="about">
      <h2><span className="about-icon">🏡</span> Sobre Nosotros</h2>
      <p>
        En <strong>Sur Propiedades</strong> nos especializamos en ayudarte a encontrar la propiedad ideal. 
        Ofrecemos un servicio transparente, rápido y confiable, respaldado por años de experiencia en el sector inmobiliario.
      </p>
      <div className="about-details">
        <div className="about-card">
          <h4>✔ Atención personalizada</h4>
          <p>Escuchamos tus necesidades y te acompañamos durante todo el proceso.</p>
        </div>
        <div className="about-card">
          <h4>🏢 Propiedades verificadas</h4>
          <p>Inmuebles con documentación al día, listos para habitar.</p>
        </div>
        <div className="about-card">
          <h4>📍 Cobertura local</h4>
          <p>Especialistas en el sur del Valle de Aburrá: Envigado, Itagüí y Sabaneta.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
