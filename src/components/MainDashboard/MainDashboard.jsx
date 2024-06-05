// MainDashboard.jsx
import { useState } from 'react';
import { AddColumnModal } from '../ModalWindow/AddColumnModal/AddColumnModal';
//import Column from './Column';

export const MainDashboard = () => {
  const [isAddColumnModalOpen, setAddColumnModalOpen] = useState(false);

  const handleAddColumnModalOpen = () => {
    setAddColumnModalOpen(true);
  };

  const handleAddColumnModalClose = () => {
    setAddColumnModalOpen(false);
  };

  return (
    <div className="main-dashboard">
      <button onClick={handleAddColumnModalOpen}>Add Column</button>
      {isAddColumnModalOpen && (
        <AddColumnModal onClose={handleAddColumnModalClose} />
      )}
      {/*<Column />*/}
      {/* Додати відображення інших колонок */}
    </div>
  );
};
