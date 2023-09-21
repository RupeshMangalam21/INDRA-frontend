import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{ fontSize: '30px', marginRight: '70vh' }}>
        <a href="/">INDRA</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/Predictions">Prediction</a>
        </li>
        <li className="nav-item">
          <a href="https://mint-echidna-492.notion.site/Cloud-Burst-Prediction-System-ensemble-ML-models-for-accurate-predictions-b068ea9138ca4f2da683b29940d3aa6f?pvs=4">Documentation</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/gks2022004/INDRA_MODEL">Repository</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
