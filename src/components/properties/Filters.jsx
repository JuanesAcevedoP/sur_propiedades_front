// src/components/Filters.jsx
const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filters">
      <h3>Filtrar por:</h3>

      <div className="filter-group">
        <label>Código</label>
        <input name="code" value={filters.code} onChange={handleChange} />
      </div>

      <div className="filter-group">
        <label>Ciudad</label>
        <input name="city" value={filters.city} onChange={handleChange} />
      </div>

      <div className="filter-group">
        <label>Tipo</label>
        <input name="type" value={filters.type} onChange={handleChange} />
      </div>

      <div className="filter-group">
        <label>Precio mínimo</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label>Precio máximo</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label>Habitaciones mín.</label>
        <input
          type="number"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Filters;
