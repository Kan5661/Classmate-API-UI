import Menu from "./Menu.jsx"
import CreateGame from './CreateModal.jsx'
import { useState } from 'react'

function Nav(prop) {

    function handleMenu() {
        prop.menuActive? prop.setMenuActive(false) : prop.setMenuActive(true)
    }
    function handleCreate() {
        prop.createActive? prop.setCreateActive(false) : prop.setCreateActive(true)
    }

    return(
        <div className="Nav">
            <svg onClick={() => handleMenu()} width="50" height="49">
                <line x1="10" y1="15" x2="40" y2="15" stroke="rgb(92,233,255)" strokeWidth="3" />
                <line x1="12" y1="25" x2="38" y2="25" stroke="rgb(92,233,255)" strokeWidth="4" />
                <line x1="10" y1="35" x2="40" y2="35" stroke="rgb(92,233,255)" strokeWidth="3" />
            </svg>
            <div onClick={() => handleCreate()} className='createBtn'>Create</div>
            <h1>Free to Play Games</h1>
            <Menu menuActive={prop.menuActive}/>
            <CreateGame setRefresh={prop.setRefresh} createActive={prop.createActive}  setCreateActive={prop.setCreateActive}/>
        </div>
        
    )
}

export default Nav