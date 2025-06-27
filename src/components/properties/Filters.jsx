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
        <select name="type" value={filters.type} onChange={handleChange}>
          <option value="">Todos</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Casa">Casa</option>
          <option value="Casa campestre">Casa campestre</option>
          <option value="Finca">Finca</option>
          <option value="Local">Local</option>
          <option value="Bodega">Bodega</option>
        </select>
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
