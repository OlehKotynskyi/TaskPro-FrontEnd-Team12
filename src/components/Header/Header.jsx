import React, { useState } from 'react';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEditProfile = e => {
    e.preventDefault();
    // Handle edit profile
    handleModalClose();
  };

  return (
    <div className="header">
      <h1>Header</h1>
      <button onClick={handleModalOpen}>Edit Profile</button>
      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleEditProfile}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            {/* Add photo upload here */}
            <button type="submit">Save</button>
            <button type="button" onClick={handleModalClose}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
