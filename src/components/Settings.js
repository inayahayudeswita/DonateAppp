import React, { useState } from "react";

const Settings = () => {
  // State untuk email dan password
  const [email, setEmail] = useState("yukmari@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  // State untuk error dan success messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // State untuk menampilkan form
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // Fungsi untuk mengganti email
  const handleEmailChange = () => {
    if (newEmail === "") {
      setEmailError("Email baru tidak boleh kosong.");
      return;
    }
    setEmail(newEmail);
    setNewEmail("");
    setEmailError("");
    setSuccessMessage("Email berhasil diubah.");
    setShowEmailForm(false); // Close the email form after changing
  };

  // Fungsi untuk mengganti password
  const handlePasswordChange = () => {
    if (newPassword === "" || newPasswordConfirm === "") {
      setPasswordError("Password baru dan konfirmasi password harus diisi.");
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      setPasswordError("Password baru dan konfirmasi password tidak cocok.");
      return;
    }
    setPassword(newPassword);
    setNewPassword("");
    setNewPasswordConfirm("");
    setPasswordError("");
    setSuccessMessage("Password berhasil diubah.");
    setShowPasswordForm(false); // Close the password form after changing
  };

  return (
    <div className="content">
      {/* Header Section */}
      <div className="header-container">
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>

      {/* Main Settings Section */}
      <div style={styles.container}>
        <h2 style={styles.title}>PENGATURAN</h2>
        
        {/* Email Settings */}
        <div>
          <h3 style={styles.subtitle}>Data Email</h3>
          <p style={styles.text}>Saat Ini Email: {email}</p>
          {!showEmailForm ? (
            <button onClick={() => setShowEmailForm(true)} style={styles.button}>
              Ganti Email
            </button>
          ) : (
            <>
              <input
                type="email"
                placeholder="Masukkan Email Baru"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                style={styles.input}
              />
              {emailError && <p style={styles.error}>{emailError}</p>}
              <div style={styles.buttonGroup}>
                <button onClick={handleEmailChange} style={styles.button}>
                  Ganti Email
                </button>
                <button
                  onClick={() => setShowEmailForm(false)}
                  style={styles.buttonCancel}
                >
                  Batal
                </button>
              </div>
            </>
          )}
        </div>
        
        {/* Password Settings */}
        <div>
          <h3 style={styles.subtitle}>Data Password</h3>
          {!showPasswordForm ? (
            <button onClick={() => setShowPasswordForm(true)} style={styles.button}>
              Ganti Kata Sandi
            </button>
          ) : (
            <>
              <input
                type="password"
                placeholder="Masukkan Password Baru"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Konfirmasi Password Baru"
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                style={styles.input}
              />
              {passwordError && <p style={styles.error}>{passwordError}</p>}
              <div style={styles.buttonGroup}>
                <button onClick={handlePasswordChange} style={styles.button}>
                  Ganti Kata Sandi
                </button>
                <button
                  onClick={() => setShowPasswordForm(false)}
                  style={styles.buttonCancel}
                >
                  Batal
                </button>
              </div>
            </>
          )}
        </div>

        {/* Success Message */}
        {successMessage && <p style={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "24px",
    width: "100%",
    maxWidth: "600px", // Maximum width for better control on larger screens
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",  // Softer shadow for better look
    marginTop: "20px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "16px",
    color: "#333",
  },
  text: {
    color: "#666",
    marginBottom: "12px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#FF9800", // Taupe orange
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "48%", // To align the buttons nicely when in a row
  },
  buttonCancel: {
    padding: "10px 20px",
    backgroundColor: "#B0BEC5", // Grey color
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "48%", // Same width as the other button
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },
  input: {
    marginTop: "12px",
    padding: "10px 16px",
    width: "100%",
    border: "1px solid #C0C0C0",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#FF9800",  // Highlight border on focus
  },
  error: {
    color: "#E65100",
    fontSize: "14px",
    marginTop: "8px",
  },
  success: {
    color: "#4CAF50",
    fontSize: "14px",
    marginTop: "12px",
  },
};

export default Settings;
