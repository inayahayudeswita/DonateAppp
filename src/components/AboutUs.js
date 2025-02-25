import React, { useState } from 'react';
import '../styles/styles.css';

const AboutUs = () => {
  const [tableData, setTableData] = useState([
    { id: 1, contentType: 'Header Title', content: 'Tentang Kami' },
    { id: 2, contentType: 'Title Description', content: 'Latar Belakang - Visi & Misi' },
    { id: 3, contentType: 'Background', content: 'Yuk-Mari Project atau disingkat YMP merupakan...' },
    { id: 4, contentType: 'Vision & Mission', content: '1. Berkomitmen memberikan layanan berkualitas...' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Handle Edit click - opens modal
  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  // Close the modal without saving
  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  // Handle save - update the content
  const handleSave = () => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === currentItem.id
          ? { ...item, content: currentItem.content, contentType: currentItem.contentType }
          : item
      )
    );
    handleModalClose();
  };

  // Handle change - update content or contentType
  const handleChange = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.name]: e.target.value,
    });
  };

  // Handle delete - remove the item from the list
  const handleDelete = (id) => {
    // Confirm before deleting
    if (window.confirm('Are you sure you want to delete this item?')) {
      setTableData((prevData) => prevData.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="content">
      <div className="header-container">
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>

      <div className="table-container">
        <h3 className="page-title">Tentang Kami</h3>
        <input type="text" className="search-box" placeholder="Search..." />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Content Type</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.contentType}</td>
                <td>{item.content}</td>
                <td className="actions">
                  <a href="#" onClick={() => handleEditClick(item)} className="edit">
                    Edit
                  </a>
                  <a href="#" onClick={() => handleDelete(item.id)} className="delete">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
      </div>


      {/* Modal for Editing */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Content</h2>
            <label>
              Content Type:
              <input
                type="text"
                name="contentType"
                value={currentItem.contentType}
                onChange={handleChange}
              />
            </label>
            <label>
              Content:
              <textarea
                name="content"
                value={currentItem.content}
                onChange={handleChange}
                rows="4"
                cols="50"
              />
            </label>
            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
