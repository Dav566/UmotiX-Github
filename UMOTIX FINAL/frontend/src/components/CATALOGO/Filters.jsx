function Filters({ search, onSearch, categories, selected, onSelect }) {
  return (
    <div className="filters">
      <input
        type="search"
        className="filters__search"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="filters__chips">
        {["Todas", ...categories].map((cat) => (
          <button
            key={cat}
            className={`chip ${selected === cat ? "chip--active" : ""}`}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;