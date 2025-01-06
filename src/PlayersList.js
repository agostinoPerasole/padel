import React, { useState, useEffect } from 'react';
import HomeButton from './HomeButton'; // Importa il componente HomeButton

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://padel-json-server-7cc2f163c913.herokuapp.com/players');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div className="players-container">
      <h1>All Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.nickname}>
            {player.nickname} ({player.name}) - {player.age} anni
          </li>
        ))}
      </ul>
	  <HomeButton /> 
    </div>
  );
}

export default PlayersList;
