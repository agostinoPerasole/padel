import React, { useState, useEffect } from 'react';
import HomeButton from './HomeButton';

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch dei giocatori
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://padel-id2x.onrender.com');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    // Fetch dei match
    const fetchMatches = async () => {
      try {
        const response = await fetch('https://padel-id2x.onrender.com');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchPlayers();
    fetchMatches();
  }, []);

  useEffect(() => {
  if (players.length > 0 && matches.length > 0) {
    const playerStats = players.map((player) => {
      // Conta le partite in cui il player è presente
      const playerMatches = matches.filter(
        (match) =>
          match.player1 === player.nickname ||
          match.player2 === player.nickname ||
          match.player3 === player.nickname ||
          match.player4 === player.nickname
      );

      // Conta le vittorie in cui il player è nei vincitori
       const wins = matches.reduce((count, match) => {
  // Verifica se il player è incluso nei vincitori
  console.log('Matches:', matches);
console.log('Players:', players);
	  if (match.winners && match.winners.includes(player.nickname)) {
		return count + 1;
	  }
	  return count;
	}, 0);




      // Calcola il tasso di vittoria
      const winRate = playerMatches.length > 0 ? wins / playerMatches.length : 0;

      return {
        nickname: player.nickname,
        wins,
        totalMatches: playerMatches.length,
        winRate,
      };
    });

    // Ordina i giocatori per tasso di vittoria
    playerStats.sort((a, b) => b.winRate - a.winRate);
    setLeaderboard(playerStats);
  }
}, [players, matches]);


  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table>
		  <caption>Player Leaderboard</caption>
		  <thead>
			<tr>
			  <th>Player</th>
			  <th>Wins</th>
			  <th>Total Matches</th>
			  <th>Win Rate</th>
			</tr>
		  </thead>
		  <tbody>
			{leaderboard.map((player) => (
			  <tr key={player.nickname}>
				<td>{player.nickname}</td>
				<td>{player.wins}</td>
				<td>{player.totalMatches}</td>
				<td>{(player.winRate * 100).toFixed(2)}%</td>
			  </tr>
			))}
		  </tbody>
		</table>

      <HomeButton />
    </div>
  );
}

export default Leaderboard;
