import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = (): JSX.Element => {
  const [click, setClick] = useState(false);

  const handleClick = (): void => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <MdFingerprint className="navbar-icon" />
          LAVISH
        </Link>
        <div
          className="menu-icon"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyPress={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
