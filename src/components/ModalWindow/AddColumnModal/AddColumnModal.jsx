// AddColumnModal.jsx
export const AddColumnModal = ({ onClose }) => {
  // Додати логіку для додавання колонки

  return (
    <div className="add-column-modal">
      <h2>Add Column</h2>
      {/* Додати форму для додавання колонки */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};
