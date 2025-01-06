import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AddPlayer from './AddPlayer';
import AddMatch from './AddMatch';
import PlayersList from './PlayersList';
import MatchesList from './MatchesList';
import Leaderboard from './Leaderboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-player" element={<AddPlayer />} />
		<Route path="/allplayers" element={<PlayersList />} />
		<Route path="/add-match" element={<AddMatch />} />
		<Route path="/allmatches" element={<MatchesList />} />
		<Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);