import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Using useNavigate for navigation

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Using useNavigate for navigation

  // Open logout confirmation modal
  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  // Close the logout confirmation modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Confirm logout
  const handleConfirmLogout = () => {
    // Clear authentication data (for example, using localStorage)
    localStorage.clear();
    // Navigate to login page after logout
    navigate("/login");
    setIsModalOpen(false);
  };

  return (
    <div style={styles.logoutContainer}>
      <button
        style={styles.logoutButton}
        onClick={handleLogoutClick}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.logoutButtonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.logoutButton.backgroundColor)}
      >
        Logout
      </button>

      {/* Confirmation modal for logout */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Apakah Anda Yakin Ingin Logout?</h2>
            <div style={styles.modalActions}>
              <button
                onClick={handleConfirmLogout}
                style={styles.modalButton}
                onMouseEnter={(e) => (e.target.style.backgroundColor = styles.modalButtonHover.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = styles.modalButton.backgroundColor)}
              >
                Lanjut
              </button>
              <button
                onClick={handleModalClose}
                style={styles.modalButtonCancel}
                onMouseEnter={(e) => (e.target.style.backgroundColor = styles.modalButtonCancelHover.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = styles.modalButtonCancel.backgroundColor)}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  // Logout Container
  logoutContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Fullscreen
    backgroundColor: "#f7f7f7", // Soft main background
  },

  // Logout Button
  logoutButton: {
    padding: "12px 24px",
    backgroundColor: "#FF9800", // Orange color for button
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },

  // Logout Button Hover
  logoutButtonHover: {
    backgroundColor: "#E65100", // Darker orange on hover
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
  },

  // Modal Overlay
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    opacity: 0,
    animation: "fadeIn 0.3s forwards", // Fade-in animation
  },

  // Animation for Fade In
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  // Modal Container
  modal: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "400px",
    maxWidth: "90%", // Adjust width for smaller screens
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Larger shadow for elegance
    textAlign: "center",
    transform: "scale(0.95)", // Modal starts slightly smaller
    animation: "scaleUp 0.3s forwards", // Scale-up animation when modal appears
  },

  // Animation for Scale Up
  "@keyframes scaleUp": {
    from: {
      transform: "scale(0.95)",
    },
    to: {
      transform: "scale(1)",
    },
  },

  // Modal Title
  modalTitle: {
    color: "#333",
    fontSize: "20px",
    marginBottom: "20px",
    fontWeight: "600",
  },

  // Modal Actions (Buttons)
  modalActions: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },

  // Modal Button
  modalButton: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s ease",
    flex: 1,
    backgroundColor: "#4CAF50", // Green for "Lanjut" button
    color: "white",
  },

  // Modal Button Hover
  modalButtonHover: {
    backgroundColor: "#45a049", // Hover effect
  },

  // Cancel Modal Button
  modalButtonCancel: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s ease",
    flex: 1,
    backgroundColor: "#f44336", // Red for cancel button
    color: "white",
  },

  // Cancel Modal Button Hover
  modalButtonCancelHover: {
    backgroundColor: "#d32f2f", // Hover effect for cancel button
  },

  // Modal Button Focus
  modalButtonFocus: {
    outline: "none",
    boxShadow: "0 0 5px rgba(255, 152, 0, 0.6)", // Focus style for button
  },
};

export default Logout;
