import React from 'react';
import { NavLink } from 'react-router-dom';

import './siteNav.scss';
const SiteNav = (props) => {
  const clickHandler = () => {
    props.parentFunc();
  };
  return (
    <nav className="site-nav">
      <button type="button" className="close" onClick={clickHandler}>
        ×
      </button>
      <ul>
        <li>
          <NavLink exact to="/" onClick={clickHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={clickHandler}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={clickHandler}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNav;
