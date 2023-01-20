import { useState, useEffect } from 'react'

function GameDetail(prop) {

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
                    <div> <span className='gameProperties'>Title:</span> {prop.gameDetail.title}</div>
                    <div> <span className='gameProperties'>Platform</span>{prop.gameDetail.platform}</div>
                    <div> <span className='gameProperties'>Developer:</span>{prop.gameDetail.developer}</div>
                    <a href={prop.gameDetail.game_url}> {prop.gameDetail.game_url}</a>
                </div>
                <div className='edit'>Edit</div>
            </div>
        </div>
    )
}

export default GameDetail