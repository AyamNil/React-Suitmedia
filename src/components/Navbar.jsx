import React from 'react';
import '../CSS/Navbar.css';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Suitmedia from '../Asset/Suitmedia.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <Image style={{ width: '150px' }} src={Suitmedia} className="logo" />
      </a>

      <div className="collapse navbar-collapse justify-content-end menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              Services
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/contact">
              Ideas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
