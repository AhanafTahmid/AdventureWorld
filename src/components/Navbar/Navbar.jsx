import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">AdventureWorld</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          </li>
          {/* <li className="dropdown">
            <span className="dropbtn">Destinations</span>
            <div className="dropdown-content">
              <NavLink to="/destinations/mountains">Mountains</NavLink>
              <NavLink to="/destinations/beaches">Beaches</NavLink>
              <NavLink to="/destinations/cities">Cities</NavLink>
            </div>
          </li> */}
           <li>
            <NavLink to="/destinations" activeClassName="active">Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/tours" activeClassName="active">Tours</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
