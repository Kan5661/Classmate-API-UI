import Menu from "./Menu.jsx"
import CreateGame from './CreateModal.jsx'
import { useState } from 'react'

function Nav() {

    const [menuActive, setMenuActive] = useState(false)
    const [createActive, setCreateActive] = useState(false)
    function handleMenu() {
        menuActive? setMenuActive(false) : setMenuActive(true)
    }
    function handleCreate() {
        createActive? setCreateActive(false) : setCreateActive(true)
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
            <Menu menuActive={menuActive}/>
            <CreateGame createActive={createActive}  setCreateActive={setCreateActive}/>
        </div>
        
    )
}

export default Nav