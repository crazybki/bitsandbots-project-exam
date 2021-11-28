import React from 'react'

function SingleGameBtn(props) {
    console.log('singlegameBtn' + props)

    function handleBuybtn(e) {
        let selectedGame = e.target.value;
        const orderedGames = JSON.parse(localStorage.getItem("games"));
        if (orderedGames) localStorage.setItem("games", JSON.stringify([...orderedGames, selectedGame]));
        else localStorage.setItem("games", JSON.stringify([selectedGame]));
        console.log(selectedGame)
    }



    return (
        <div>
            <button className="singlegame_btn" onClick={handleBuybtn} value={props.singlegameBtn}>Buy</button>
        </div>
    )
}

export default SingleGameBtn
