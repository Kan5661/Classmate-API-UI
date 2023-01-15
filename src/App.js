import './App.css';
import { useState, useEffect } from 'react'
import GameCards from './GameInfoCard.jsx'
import Nav from './Nav.jsx';


function App() {
  const [games, setGames] = useState([])

  function fetchGames() {
    fetch('https://free-to-play-gaming-api-production.up.railway.app/')
    .then(res => res.json())
    .then(data => setGames(data))
  }

  useEffect(() => fetchGames(), [])

  return (
    <div className="app">
      <Nav />
      <GameCards />
    </div>
  );
}

export default App;
