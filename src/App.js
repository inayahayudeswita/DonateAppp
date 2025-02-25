import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // Tidak perlu BrowserRouter lagi
import Sidebar from './components/Sidebar';
import AboutUs from './components/AboutUs';
import { Content } from './components/Content';
import Program from './components/Program';
import Transaksi from './components/Transaksi';
import Settings from './components/Settings';
import Login from "./components/Login";
import Logout from "./components/Logout";
import './styles/App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/logout"];

  return (
    <div className="app-container">
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}
      {children}
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("authToken");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/content");  // Menambahkan redirect otomatis ke "/content"
    }
  }, [navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/content" element={<Content />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/program" element={<Program />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Layout>
  );
};

export default App;
