function GameCards(prop) {
    let gamesList = []
    prop.allGames.forEach(item => 
        gamesList.push(
            <div className="game" onClick={() => {
                prop.setGameDetail(item)
                prop.setDisplayGameDetails(true)
            }}>
                    <div>
                        <img src={item.thumbnail}></img>
                    </div>
                    <div>{item.title}</div>
            </div>
        ))
    return(
        <div className="GamesList">
            {gamesList}
        </div>
    )
}

export default GameCards