import React, { useState } from 'react'

function Filtergames(games) {



    const [filterItems, setFilterItems] = useState([])



    return (
        <div>
            {games.filterGenres.map(function (gameinfo) {
                console.log(gameinfo.genres)
            })}
        </div >
    )
}

export default Filtergames
