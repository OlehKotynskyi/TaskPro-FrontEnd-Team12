import { useState } from 'react';

export const Sidebar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCreateBoard = e => {
    e.preventDefault();
    // Handle create board
    handleModalClose();
  };

  return (
    <div className="sidebar">
      <button onClick={handleModalOpen}>Create New Board</button>
      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleCreateBoard}>
            <label>
              Title:
              <input type="text" name="title" required />
            </label>
            {/* Add icon and background selection here */}
            <button type="submit">Create</button>
            <button type="button" onClick={handleModalClose}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => {
          /* Handle logout */
        }}
      >
        Logout
      </button>
    </div>
  );
};
