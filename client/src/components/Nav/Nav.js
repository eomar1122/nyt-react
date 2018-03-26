import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () =>

  <nav className="navbar navbar-dark bg-dark" style={{position: 'fixed', zIndex: 100, width: '100%'}}>
    <Link className="navbar-brand" to="/">New York Times Articles</Link>
    <ul className="navbar-nav" style={{float: 'right'}}>
      <li className="nav-item">
        <Link to="/"><button type="button" className="btn btn-info top">Home</button></Link>
      </li>
      <li className="nav-item">
        <Link to="/savedArticles"><button type="button" className="btn btn-info top">Saved Articles</button></Link>
      </li>
    </ul>
</nav>;

export default Nav;
