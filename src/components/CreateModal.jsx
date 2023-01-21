import { useState } from 'react'
import axios from 'axios'

function CreateGame(prop) {
    const [createGame, setCreateGame] = useState({})
    function handleChange(e) {
        setCreateGame((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit() {
        prop.setCreateActive(false)
        axios.post('https://free-to-play-gaming-api-production.up.railway.app/', createGame)
        .then(() => {
            setCreateGame({})
            prop.setRefresh(prev => prev + 1)
        })
        
    }

    return(
        <div className={prop.createActive? 'createScreen' : 'hideElement'}>
            <form className="createForm">
                <input onChange={handleChange} type='text' name='title' placeholder="title" value={prop.createActive? createGame.title : ''}></input>
                <input onChange={handleChange} type='text' name='genre' placeholder="genre" value={prop.createActive? createGame.genre : ''}></input>
                <input onChange={handleChange} type='text' name='thumbnail' placeholder="thumbnail" value={prop.createActive? createGame.thumbnail : ''}></input>
                <input onChange={handleChange} type='text' name='game_url' placeholder="game url" value={prop.createActive? createGame.game_url : ''}></input>
                <input onChange={handleChange} type='text' name='platform' placeholder="platform" value={prop.createActive? createGame.platform : ''}></input>
                <input onChange={handleChange} type='text' name='developer' placeholder="developer" value={prop.createActive? createGame.developer : ''}></input>
                <input onChange={handleChange} type='text' name='release_date' placeholder="release date" value={prop.createActive? createGame.release_date : ''}></input>
                <button type='button' onClick={() => handleSubmit()}>Create</button>
            </form>
        </div>
    )
}

export default CreateGame