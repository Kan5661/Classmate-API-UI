import { useState, useEffect } from 'react'
import axios from 'axios'

function GameDetail(prop) {
    function handleDelete() {
        axios.delete(`https://free-to-play-gaming-api-production.up.railway.app/${prop.gameDetail._id}`)
        .then(() => {
            prop.setRefresh(prev => prev + 1)
            prop.setShowGameDetail(false)
        })
    }

    function handleEdit() {
        axios.put(`https://free-to-play-gaming-api-production.up.railway.app/${prop.gameDetail._id}`, prop.createGame)
        .then(() => {
            prop.setRefresh(prev => prev + 1)
            prop.setShowGameDetail(false)
        })
    }

    return(
        <div className={prop.showGameDetail? 'GameDetail' : 'hideElement'}>
            <div className="info">
                <div className='closeBtnContainer'>
                    <div onClick={() => prop.setShowGameDetail(false)} className='closeBtn'>X</div>
                 </div>
                <div className='detailImage'>
                    <img className='Image' src={prop.gameDetail.thumbnail}></img>
                </div>
                <div className='gameInfo'>
                    <div> <span className='gameProperties'>Title: </span> {prop.gameDetail.title}</div>
                    <div> <span className='gameProperties'>Genre: </span> {prop.gameDetail.genre}</div>
                    <div> <span className='gameProperties'>Platform: </span>{prop.gameDetail.platform}</div>
                    <div> <span className='gameProperties'>Developer: </span>{prop.gameDetail.developer}</div>
                    <div> <span className='gameProperties'>Release_date: </span>{prop.gameDetail.release_date}</div>
                    <a href={prop.gameDetail.game_url}> {prop.gameDetail.game_url}</a>
                </div>
                <div className='editDelete'>
                    <div className='edit'>Edit</div>
                    <div className='delete' onClick={() => handleDelete()}>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default GameDetail