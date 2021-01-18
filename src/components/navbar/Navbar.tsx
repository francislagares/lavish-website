import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../button/Button';

import { IconContext } from 'react-icons/lib';
import './Navbar.css';

const Navbar = (): JSX.Element => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = (): void => setClick(!click);
  const closeMobileMenu = (): void => setClick(false);

  const showButton = (): void => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link
                  to="/sign-up"
                  className="btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
