import React, { useState, useEffect } from 'react';
import HomeButton from './HomeButton'; // Importa il componente HomeButton
import './MatchesList.css'; // Importa il CSS per la tabella

function MatchesList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:5000/matches');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="matches-container">
      <h1>All Matches</h1>
      <table className="matches-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.nickname}>
              <td>{match.date}</td>
              <td>{match.player1} - {match.player2}</td>
              <td>{match.player3} - {match.player4}</td>
              <td>{match.resultTeam1} - {match.resultTeam2}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <HomeButton />
    </div>
  );
}

export default MatchesList;
