import FeaturedProperties from "../components/home/FeaturedProperties";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Encuentra tu hogar ideal en el Sur</h1>
        <p>Sur Propiedades - 2 años acompañándote</p>
        <a
          className="hero-button"
          href="https://wa.me/573147359634"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar asesor
        </a>
      </section>
      <div className="section-divider"></div>
      <AboutUs />

      <section className="featured">
        <h2>Propiedades Destacadas</h2>
        <FeaturedProperties />
      </section>
    </div>
  );
};

export default Home;
