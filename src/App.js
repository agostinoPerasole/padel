import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './global.css'; // Importa il CSS globale
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Padel Tracker</h1>
        <p className="welcome-message">Track your padel matches and players effortlessly!</p>
      </header>
      <section className="content">
        <div className="button-group">
          <Link to="/add-player" className="button">Add New Player</Link>
          <Link to="/add-match" className="button">Add New Match</Link>
		  <Link to="/players" className="button">View All Players</Link>
          <Link to="/matches" className="button">View All Matches</Link>
		  <Link to="/leaderboard" className="button">Classifica</Link>
        </div>
          
      </section>
    </div>
  );
}

export default App;
