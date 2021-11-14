import React, { useState } from 'react'

function Filtergames(games) {

    const [filterItems, setFilterItems] = useState([])

    function handleChange(e) {
        const filterItem = games.data.map(item => item.genre).filter(genres => genres === 'Puzzle')
        setFilterItems(filterItem)
        console.log(filterItem)
    }

    return (
        <div>
            <button onClick={handleChange} value="puzzle">
                Puzzle
            </button>

            <button onClick={handleChange} value="RPG">
                RPG
            </button>
        </div >
    )
}

export default Filtergames
