function Menu(prop) {
    const genreList = ['MMORPG', 'Shooter', 'Strategy', 'Fighting', 'Action RPG',
    'Battle Royale', 'ARPG', 'MOBA', 'Card Game', 'Sports',
    'MMOFPS', 'MMO', 'Racing', 'Social', 'Fantasy']
    let newList = []
    genreList.forEach(item => newList.push(<div className="menuItem">{item}</div>))

    return(
        <div className="menu" id={prop.menuActive? "revealMenu" : "hideMenu"}>
            {newList}
        </div>
    )
}

export default Menu