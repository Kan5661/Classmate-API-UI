import './App.css'
import { useState, useEffect } from 'react'
import GameCards from './components/GameInfoCard.jsx'
import Nav from './components/Nav.jsx';
import GameDetail from './components/GameDetails.jsx';
import axios from 'axios';


function App() {
  const [games, setGames] = useState([])
  const [displayGameDetails, setDisplayGameDetails] = useState(false)
  const [gameDetail, setGameDetail] = useState({})
  const [menuActive, setMenuActive] = useState(false)
  const [createActive, setCreateActive] = useState(false)
  const [createGame, setCreateGame] = useState({})
  const [refresh, setRefresh] = useState(0)
  function fetchGames() {
    axios.get('https://free-to-play-gaming-api-production.up.railway.app/')
    .then(res => setGames(res.data))
  }

  useEffect(() => fetchGames(), [refresh])
  if (!games) return <div>loading</div>

  return (
    <div className="app">
      <Nav createGame={createGame} setCreateGame={setCreateGame} setRefresh={setRefresh} menuActive={menuActive} setCreateActive={setCreateActive} setMenuActive={setMenuActive} createActive={createActive}/>
      <GameCards allGames={games} setGameDetail={setGameDetail} setDisplayGameDetails={setDisplayGameDetails}/>
      <GameDetail createGame={createGame} setRefresh={setRefresh} gameDetail={gameDetail} showGameDetail={displayGameDetails} setShowGameDetail={setDisplayGameDetails}/>
    </div>
  );
}

export default App;
