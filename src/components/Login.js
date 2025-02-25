import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/styles.css'; // Pastikan CSS sudah ditambahkan di styles

const Login = () => {
  const navigate = useNavigate();
  const [captchaValidated, setCaptchaValidated] = useState(false);

  useEffect(() => {
    console.log("Google reCAPTCHA Loaded!");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!captchaValidated) {
      alert("Please complete the reCAPTCHA verification!");
      return;
    }
    
    // Proses autentikasi (misalnya cek username dan password)
    // Jika berhasil login, simpan token (contoh menggunakan localStorage)
    localStorage.setItem("authToken", "valid-token"); // Ganti dengan logika autentikasi
    
    // Arahkan ke halaman content setelah login sukses
    navigate("/content");
  };

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValidated(true);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src="/images/Login.png" alt="Illustration" className="image" />
        </div>
        <div className="login-form">
          <img src="/images/Logo.png" alt="Logo" className="logo" />
          <h2 className="login-title">Please enter your details</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Your Account" className="input-field" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Your Password" className="input-field" required />
            </div>
            <ReCAPTCHA sitekey="6Le2e-AqAAAAANlTBnA6oJFe6vl-AHlkh1LsZvf2" onChange={onCaptchaChange} />
            <div className="options">
              <a href="#" className="forgot-password">Forget Password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// CSS Styles
const styles = `
:root {
    --primary-color: #FF9800; /* Warna oranye untuk tombol utama */
    --secondary-color: #FFD180; /* Warna hover tombol */
    --background-color:rgb(246, 241, 236); /* Warna background utama (pastel ungu) */
    --form-bg-color: #FFFFFF; /* Background form login */
    --input-border-color: #C0C0C0; /* Warna border input */
    --text-color: #333333; /* Warna teks utama */
    --link-color: #FF9800; /* Warna teks link */
    --link-hover-color: #E65100; /* Warna teks link saat hover */
}

body {
    background-color: var(--background-color);
    font-family: Arial, sans-serif;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--background-color);
}

.login-box {
    display: flex;
    background: var(--form-bg-color);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    width: 800px;
}

.login-image {
    width: 50%;
    background:rgb(255, 250, 250);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.image {
    width: 75%;
    height: auto;
}

.login-form {
    width: 50%;
    padding: 40px;
    background: rgb(250, 238, 238);
}

.logo {
    width: 120px; /* Perbesar agar lebih terlihat */
    height: auto;
    object-fit: content;
}

.login-title {
    text-align: center;
    color: var(--text-color);
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    color: var(--text-color);
    font-size: 0.9rem;
    margin-bottom: 5px;
}

.input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--input-border-color);
    border-radius: 5px;
    outline: none;
}

.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    margin-bottom: 20px;
}

.forgot-password {
    color: var(--link-color);
    text-decoration: none;
}

.forgot-password:hover {
    color: var(--link-hover-color);
}

.login-button {
    width: 100%;
    background-color: var(--primary-color);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

.login-button:hover {
    background-color: var(--secondary-color);
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
