import React, { useState } from "react";
import '../styles/styles.css';

const Transaksi = () => {
  const [data, setData] = useState([
    { id: 1, type: "Transaction Header", content: "Pembelian Produk" },
    { id: 2, type: "Transaction Description", content: "Pembayaran dilakukan melalui bank" },
    { id: 3, type: "Transaction Header 2", content: "Cara Pembayaran" },
    { id: 4, type: "Transaction Description 2", content: "Hubungi customer service untuk bantuan" },
    { id: 5, type: "Footer Title", content: "Terima Kasih atas Pembelian Anda" },
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
    setData((prevData) =>
      prevData.map((item) =>
        item.id === currentItem.id
          ? { ...item, content: currentItem.content, type: currentItem.type }
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
      setData((prevData) => prevData.filter((item) => item.id !== id));
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
        <h2 className="page-title">Transaksi Kami</h2>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.content}</td>
                <td>
                  <a href="#" onClick={() => handleEditClick(item)} className="edit">
                    Edit
                  </a> |{" "}
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

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Content</h2>
            <label>
              Content Type:
              <input
                type="text"
                name="type"
                value={currentItem.type}
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

export default Transaksi;
