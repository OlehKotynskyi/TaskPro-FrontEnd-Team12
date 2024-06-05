// ScreensPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainDashboard from './MainDashboard';
import FiltersModal from './FiltersModal';

const ScreensPage = () => {
  const { boardName } = useParams();
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);

  const handleFiltersModalOpen = () => {
    setFiltersModalOpen(true);
  };

  const handleFiltersModalClose = () => {
    setFiltersModalOpen(false);
  };

  return (
    <div className="screens-page">
      <h1>{boardName}</h1>
      <button onClick={handleFiltersModalOpen}>Filters</button>
      {isFiltersModalOpen && <FiltersModal onClose={handleFiltersModalClose} />}
      <MainDashboard />
    </div>
  );
};

export default ScreensPage;
