import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo"><span className='black'>Sri</span><span className='white'>Ram</span></div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href='#Home' className="navbar-link" onClick={closeMenu} ><i class='bx bxs-home' >Home</i></a>
          <a href="#about" className="navbar-link" onClick={closeMenu}><i class='bx bxs-user-circle' >About</i></a>
          <a href="#skills" className="navbar-link" onClick={closeMenu}><i class='bx bxs-file' >Skills</i></a>
          <a href="#projects" className="navbar-link" onClick={closeMenu}><i class='bx bxs-briefcase' >Projects</i></a>
          <a href="#ContactMe" className="navbar-link"onClick={closeMenu} ><i class='bx bxs-mobile' >ContactMe</i></a>
          <a href="#resume" className="navbar-link" onClick={closeMenu}><i class='bx bx-paperclip bx-flashing' ></i>Resume</a> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
