import React, { useEffect, useState } from 'react';
import Filters from '../components/properties/Filters';
import PropertyGrid from '../components/properties/PropertyGrid';

const Search = () => {
  const [filters, setFilters] = useState({
    code: '',
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });

  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('https://surpropiedades-backend.onrender.com/api/properties');
        const data = await res.json();
        setProperties(data);
        setFiltered(data);
      } catch (err) {
        console.error('Error al cargar propiedades:', err);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const results = properties.filter((prop) => {
      const matchesCode = !filters.code || prop.code.toLowerCase().includes(filters.code.toLowerCase());
      const matchesCity = !filters.city || prop.city.toLowerCase().includes(filters.city.toLowerCase());
      const matchesType = !filters.type || prop.type.toLowerCase().includes(filters.type.toLowerCase());
      const matchesMinPrice = !filters.minPrice || parseFloat(prop.price) >= parseFloat(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || parseFloat(prop.price) <= parseFloat(filters.maxPrice);
      const matchesBedrooms = !filters.bedrooms || parseInt(prop.bedrooms) >= parseInt(filters.bedrooms);

      return (
        matchesCode &&
        matchesCity &&
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms
      );
    });

    setFiltered(results);
  }, [filters, properties]);

  return (
    <div className="search-wrapper">
      <aside className="filters-sidebar">
        <Filters filters={filters} setFilters={setFilters} />
      </aside>
      
      <section className="results-content">
        <h3>RESULTS:</h3>
        <PropertyGrid properties={filtered} />
      </section>
    </div>
  );
};

export default Search;