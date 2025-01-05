import React, { useState, useEffect } from 'react';
import HomeButton from './HomeButton'; // Importa il componente HomeButton

function AddMatch() {
  const [match, setMatch] = useState({
    idMatch: '',
    date: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    resultTeam1: '',
    resultTeam2: '',
    winners: [],
  });

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:5000/players');
        const data = await response.json();
        setPlayers(data);  // Memorizza i giocatori in stato
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchPlayers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
	  
	const updatedWinners =
    match.winners === "Team1"
      ? [match.player1, match.player2]
      : match.winners === "Team2"
      ? [match.player3, match.player4]
      : [];

  // Aggiorna il campo winners con l'array calcolato
  const updatedMatch = { ...match, winners: updatedWinners };
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMatch),
      });
      if (response.ok) {
        alert(`Match ${match.idMatch} added!`);
        setMatch({
          idMatch: '',
          date: '',
          player1: '',
          player2: '',
          player3: '',
          player4: '',
          resultTeam1: '',
          resultTeam2: '',
          winners: [],
        });
      } else {
        console.error('Failed to add Match');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
     <div className="add-match-container">
      <h1>Add New Match</h1>
      <form onSubmit={handleSubmit}>
        <label>
          idMatch:
          <input
            type="text"
            name="idMatch"
            value={match.idMatch}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          date:
          <input
            type="date"
            name="date"
            value={match.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          player1:
          <select
            name="player1"
            value={match.player1}
            onChange={handleChange}
            required
          >
            <option value="">Select Player 1</option>
            {players.map((player) => (
              <option key={player.nickname} value={player.nickname}>
                {player.nickname}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          player2:
          <select
            name="player2"
            value={match.player2}
            onChange={handleChange}
            required
          >
            <option value="">Select Player 2</option>
            {players.map((player) => (
              <option key={player.nickname} value={player.nickname}>
                {player.nickname}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          player3:
          <select
            name="player3"
            value={match.player3}
            onChange={handleChange}
            required
          >
            <option value="">Select Player 3</option>
            {players.map((player) => (
              <option key={player.nickname} value={player.nickname}>
                {player.nickname}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          player4:
          <select
            name="player4"
            value={match.player4}
            onChange={handleChange}
            required
          >
            <option value="">Select Player 4</option>
            {players.map((player) => (
              <option key={player.nickname} value={player.nickname}>
                {player.nickname}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          resultTeam1:
          <input
            type="text"
            name="resultTeam1"
            value={match.resultTeam1}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          resultTeam2:
          <input
            type="text"
            name="resultTeam2"
            value={match.resultTeam2}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
		  Winners:
		  <select
			name="winners"
			value={match.winners}
			onChange={handleChange}
			required
		  >
			<option value="">--Seleziona un vincitore--</option>
			<option value="Team1">Team 1</option>
			<option value="Team2">Team 2</option>
		  </select>
		</label>
        <br />
        <button type="submit">Save Match</button>
      </form>
	   <HomeButton />
    </div>
  );
}

export default AddMatch;
