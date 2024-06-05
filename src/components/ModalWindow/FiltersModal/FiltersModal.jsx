// FiltersModal.jsx

export const FiltersModal = ({ onClose }) => {
  // Додати логіку для фільтрів

  return (
    <div className="filters-modal">
      <h2>Filters</h2>
      {/* Додати елементи фільтрації */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};
