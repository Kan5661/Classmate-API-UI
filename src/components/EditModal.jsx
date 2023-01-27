import { useState } from 'react'
import axios from 'axios'

function EditGame(prop) {
    function handleChange(e) {
        prop.setCreateGame((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit() {
        axios.put(`https://free-to-play-gaming-api-production.up.railway.app/${prop.createGame._id} `, prop.createGame)
        .then(() => {
            prop.setCreateGame({})
            prop.setRefresh(prev => prev + 1)
        })
        
    }

    return(
        <div className={prop.createActive? 'createScreen' : 'hideElement'}>
            <form className="createForm">
                <input onChange={handleChange} type='text' name='Edit Title' placeholder="title" value={prop.createActive? prop.createGame.title : ''}></input>
                <input onChange={handleChange} type='text' name='Edit Genre' placeholder="genre" value={prop.createActive? prop.createGame.genre : ''}></input>
                <input onChange={handleChange} type='text' name='Edit Thumbnail' placeholder="thumbnail" value={prop.createActive? prop.createGame.thumbnail : ''}></input>
                <input onChange={handleChange} type='text' name='Edit Game_url' placeholder="game url" value={prop.createActive? prop.createGame.game_url : ''}></input>
                <input onChange={handleChange} type='text' name='Edit Platform' placeholder="platform" value={prop.createActive? prop.createGame.platform : ''}></input>
                <input onChange={handleChange} type='text' name='Edit Developer' placeholder="developer" value={prop.createActive? prop.createGame.developer : ''}></input>
                <input onChange={handleChange} type='text' name='Edit Release_date' placeholder="release date" value={prop.createActive? prop.createGame.release_date : ''}></input>
                <button type='button' onClick={() => handleSubmit()}>Edit</button>
            </form>
        </div>
    )
}

export default CreateGame