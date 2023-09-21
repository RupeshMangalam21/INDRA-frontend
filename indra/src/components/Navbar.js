import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">INDRA</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/documentation">Documentation</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/your-repository-url">Repository</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
