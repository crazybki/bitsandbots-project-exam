import React, { useEffect } from 'react';
import { useState } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';

function BuyNowBtn(props) {

    function handleBuybtn(e) {
        let input = e.target.value;
        const orderedGames = JSON.parse(localStorage.getItem("games"));
        if (orderedGames) localStorage.setItem("games", JSON.stringify([...orderedGames, input]));
        else localStorage.setItem("games", JSON.stringify([input]));
    }


    return (
        <div>
            <button onClick={handleBuybtn} value={props.gameName}>Buy</button>
        </div>
    )
}

export default BuyNowBtn
