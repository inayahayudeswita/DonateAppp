import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Sidebar.css'; // Import your CSS for styling

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [activeItem, setActiveItem] = useState(null); // State untuk item yang aktif
  const navigate = useNavigate(); // Initialize useNavigate

  // Open confirmation modal
  const handleLogoutClick = () => {
    setIsModalOpen(true); // Show the confirmation modal
  };

  // Handle logout confirmation
  const handleLogoutConfirm = () => {
    // Clear session data (e.g., localStorage or sessionStorage)
    localStorage.clear(); // or sessionStorage.clear();
    // Redirect to login page after logout
    navigate('/login'); // Use navigate instead of history.push
    setIsModalOpen(false); // Close the modal after logout
  };

  // Close the modal if user cancels
  const handleModalClose = () => {
    setIsModalOpen(false); // Hide the modal
  };

  // Handle klik item sidebar untuk aktifkan
  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update state dengan item yang aktif
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/images/Logo.png" alt="Logo" className="logo" />
      </div>

      {/* Menu List */}
      <ul id="menu" className="menu-list">
        <li
          className={activeItem === 'home' ? 'active' : ''}
          onClick={() => handleItemClick('home')}
        >
          <Link to="/content" className="menu-item">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li
          className={activeItem === 'aboutus' ? 'active' : ''}
          onClick={() => handleItemClick('aboutus')}
        >
          <Link to="/aboutus" className="menu-item">
            <i className="fas fa-info-circle"></i> Tentang Kami
          </Link>
        </li>
        <li
          className={activeItem === 'program' ? 'active' : ''}
          onClick={() => handleItemClick('program')}
        >
          <Link to="/program" className="menu-item">
            <i className="fas fa-tasks"></i> Program Kami
          </Link>
        </li>
        <li
          className={activeItem === 'transaksi' ? 'active' : ''}
          onClick={() => handleItemClick('transaksi')}
        >
          <Link to="/transaksi" className="menu-item">
            <i className="fas fa-money-bill"></i> Transaksi
          </Link>
        </li>
        <li
          className={activeItem === 'settings' ? 'active' : ''}
          onClick={() => handleItemClick('settings')}
        >
          <Link to="/settings" className="menu-item">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
      </ul>

      {/* Logout Button */}
      <div className="logout-container">
        <div className="logout-item" onClick={handleLogoutClick}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Apakah Anda Yakin Ingin Logout?</h2>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleLogoutConfirm}>Ya, Logout</button>
              <button className="cancel-btn" onClick={handleModalClose}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
