import React from 'react';
import { Link } from 'react-router-dom';

const Linking = () => (
  <nav className="nav-bar">
    <div className="left-nav">
      <span className="book-logo">Book Store CMS</span>
      <Link className="nav-books" to="/">BOOKS</Link>
      <Link className="nav-categories" to="/categories">CATEGORIES</Link>
    </div>
    <div className="left-nav">
      icon
    </div>
  </nav>
);

export default Linking;
