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
        <p className="welcome-message">Salva le tue partite senza sforzo!</p>
      </header>
      <section className="content">
        <div className="button-group">
		
          <Link to="/add-player" className="button">Nuovo Giocatore</Link>
          <Link to="/add-match" className="button">Aggiungi Partita</Link>
	
          <Link to="/matches" className="button">Storico Partite</Link>
		  
		  <Link to="/leaderboard" className="button">Classifica</Link>

		  <Link to="/players" className="button">Vedi Giocatori</Link>
        </div>
          
      </section>
    </div>
  );
}

export default App;
