import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Linking from './components/Linking';
import Books from './components/Books';
import Categories from './components/Categories';
import './CSS/app.css';

function App() {
  return (
    <div className="App">
      <Linking />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
