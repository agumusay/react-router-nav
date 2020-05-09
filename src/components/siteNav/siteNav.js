import React from 'react';
import { NavLink } from 'react-router-dom';

import './siteNav.scss';
const SiteNav = (props) => {
  return (
    <nav className="site-nav">
      <button type="button" className="close" onClick={props.parentFunc}>
        ×
      </button>
      <ul>
        <li>
          <NavLink exact to="/" onClick={props.parentFunc}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={props.parentFunc}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={props.parentFunc}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNav;
