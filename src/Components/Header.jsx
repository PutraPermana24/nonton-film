import React, { useState } from 'react';
import '../Styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'mobile-open' : ''}`}>
      <h1 className="logo">Nonton<b>Film</b></h1>
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">Beranda</li>
          <li className="nav-item">Film Terbaru</li>
          <li className="nav-item">Kategori</li>
          <li className="nav-item">Tentang Kami</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
