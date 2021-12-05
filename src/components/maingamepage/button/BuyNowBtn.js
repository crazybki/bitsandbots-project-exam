import React, { useState } from 'react';


function BuyNowBtn(props) {

    console.log(props.gameImg.cover.image_id)
    const [boughtGame, setBoughtGame] = useState(true)


    function handleBuybtn(e) {
        let input = e.target.value;
        const orderedGames = JSON.parse(localStorage.getItem("games"));
        if (orderedGames) localStorage.setItem("games", JSON.stringify([...orderedGames, input]));
        else localStorage.setItem("games", JSON.stringify([input]));
        console.log(input)
        setBoughtGame(false);
    }




    function handleRemoveGame(e) {
        let gameName = e.target.value;
        let localStored = JSON.parse(localStorage.getItem('games'));
        localStorage.setItem("games", JSON.stringify(localStored.filter(fav => fav !== gameName)));
        console.log(gameName)
        setBoughtGame(true);
    }
    return (
        <div>
            {boughtGame
                ? <button className="buynow_btnbuy" onClick={handleBuybtn} value={JSON.stringify(props.gameImg)}>Buy</button>
                : <button className="buynow_btn" onClick={handleRemoveGame} value={JSON.stringify(props.gameImg)}>Bought</button>}
        </div>

    )
}

export default BuyNowBtn;
