import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const HomeButton = () => {
  return (
    <div className="home-button-container">
      <Link to="/" className="home-button">🏠 Home</Link>
    </div>
  );
};

export default HomeButton;
