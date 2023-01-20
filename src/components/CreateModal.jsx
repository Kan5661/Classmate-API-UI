import e from "cors"

function CreateGame(prop) {
    function handleSubmit() {
        prop.setCreateActive(false)
    }

    return(
        <div className={prop.createActive? 'createScreen' : 'hideElement'}>
            <form className="createForm">
                <input type='text' placeholder="title"></input>
                <input type='text' placeholder="genre"></input>
                <input type='text' placeholder="thumbnail"></input>
                <input type='text' placeholder="game url"></input>
                <input type='text' placeholder="platform"></input>
                <input type='text' placeholder="developer"></input>
                <input type='text' placeholder="release date"></input>
                <button type='button' onClick={() => handleSubmit()}>Create</button>
            </form>
        </div>
    )
}

export default CreateGame