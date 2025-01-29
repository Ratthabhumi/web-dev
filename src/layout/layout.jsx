// src/layout/Layout.jsx
import PropTypes from 'prop-types';
import Navbar from '../components/navbar/navbar'; // Updated path for Navbar
import Footer from '../components/Footer'; // Assuming you have a Footer component
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
