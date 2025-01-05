import React, { useState } from 'react';
import HomeButton from './HomeButton'; // Importa il componente HomeButton

function AddPlayer() {
  const [player, setPlayer] = useState({
    nickname: '',
    name: '',
    age: '',
    handedness: 'right',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    if (response.ok) {
      alert(`Player ${player.nickname} added!`);
      setPlayer({
        nickname: '',
        name: '',
        age: '',
        handedness: 'right',
      });
    } else {
      console.error('Failed to add player');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
     <div className="add-player-container">
      <h1>Add New Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={player.nickname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={player.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Handedness:
          <select
            name="handedness"
            value={player.handedness}
            onChange={handleChange}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </label>
        <br />
        <button type="submit">Save Player</button>
      </form>
	   <HomeButton />
    </div>
  );
}

export default AddPlayer;
