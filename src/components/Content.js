import React, { useState } from 'react';
import '../styles/Content.css'; // Pastikan path-nya benar

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);  // State untuk kontrol pop-up visibility
  const [donationData, setDonationData] = useState({ name: '', amount: '', message: '' });  // State untuk input form

  const [currentIndex, setCurrentIndex] = useState(0); // State untuk kontrol index gambar yang ditampilkan
  const images = [
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", 
    "/images/image4.jpg", "/images/image5.jpg", "/images/image6.jpg", "/images/image7.jpg"
  ]; // Daftar gambar yang akan ditampilkan

  // Fungsi untuk membuka pop-up
  const openPopup = () => {
    setIsOpen(true);
  };

  // Fungsi untuk menutup pop-up
  const closePopup = () => {
    setIsOpen(false);
  };

  // Fungsi untuk menangani perubahan input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Untuk memformat jumlah donasi menjadi Rupiah
    if (name === "amount") {
      const formattedAmount = formatRupiah(value);
      setDonationData({ ...donationData, [name]: formattedAmount });
    } else {
      setDonationData({ ...donationData, [name]: value });
    }
  };

  // Fungsi untuk memformat angka ke format Rupiah
  const formatRupiah = (amount) => {
    const numericValue = amount.replace(/\D/g, '');
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(numericValue);
  };

  // Fungsi untuk mengirimkan data donasi
  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Donasi berhasil!\nNama: ${donationData.name}\nJumlah: ${donationData.amount}\nPesan: ${donationData.message}`);
    closePopup();  // Tutup pop-up setelah donasi
  };

  // Fungsi untuk next slide
  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fungsi untuk previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="content">
      {/* Header and Search Section */}
      <div className="header-container">
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>

      {/* Welcome Message and Video Section */}
      <div className="table-container">
        <div className="main-section">
          <div className="video-section">
            <video width="320" height="240" controls>
              <source src="/images/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-section">
            <h2 className="welcome-message">Selamat Datang di Dashboard Admin!</h2>
            <p className="description">
              Dapatkan informasi terbaru dan kelola program donasi di sini.
            </p>
          </div>
        </div>

      {/* Donation Button Section */}
      <div className="donation-button-container">
        <button className="donation-button" onClick={openPopup}>Donasi Sekarang</button>
      </div>

       {/* Program 1, 2, and 3 Section */}
       <div className="program-section">
        <div className="program-box">
          <h3>Program 1</h3>
          <p>Deskripsi program 1 yang menarik dan informatif.</p>
        </div>
        <div className="program-box">
          <h3>Program 2</h3>
          <p>Deskripsi program 2 yang menarik dan informatif.</p>
        </div>
        <div className="program-box">
          <h3>Program 3</h3>
          <p>Deskripsi program 3 yang menarik dan informatif.</p>
        </div>
      </div>

      {/* Pop-up Form Section */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h3>Form Donasi</h3>
            <form onSubmit={handleDonate}>
              <label htmlFor="name">Nama Donatur:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={donationData.name}
                onChange={handleInputChange}
                required
              />
              
              <label htmlFor="amount">Jumlah Donasi:</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={donationData.amount}
                onChange={handleInputChange}
                placeholder="Masukkan jumlah donasi"
                required
              />
              
              <label htmlFor="message">Pesan (Opsional):</label>
              <textarea
                id="message"
                name="message"
                value={donationData.message}
                onChange={handleInputChange}
              />

              <button type="submit">Kirim Donasi</button>
              <button type="button" className="close-btn" onClick={closePopup}>Tutup</button>
            </form>
          </div>
        </div>
      )}

      {/* Image Slider Section */}
      <div className="image-slider">
        {/* Previous Button */}
        <button className="slider-btn prev" onClick={prevSlide}>‹</button>

        {/* Slider Container for displaying 3 images */}
        <div className="slider-container">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          ))}
        </div>

        {/* Next Button */}
        <button className="slider-btn next" onClick={nextSlide}>›</button>
      </div>
    </div>
    </div>
  );
};

export { Content };
