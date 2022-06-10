import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import '../CSS/linking.css';

const Linking = () => (
  <nav className="nav-bar flex">
    <div className="left-nav">
      <span className="book-logo">Book Store CMS</span>
      <Link className="nav-books" to="/">BOOKS</Link>
      <Link className="nav-categories" to="/categories">CATEGORIES</Link>
    </div>
    <div className="right-nav">
      <CgProfile />
    </div>
  </nav>
);

export default Linking;
