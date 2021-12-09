import React, { useState, useEffect } from 'react';


function BuyNowBtn(props) {

    const [boughtGame, setBoughtGame] = useState(true)

    //  console.log(props.gameImg.cover.id)
    function handleBuybtn(id, name, img, price) {
        const orderedGames = JSON.parse(localStorage.getItem('game'));
        let gameName = name;
        let gameImg = img;
        let gamePrice = price
        let newGames = {
            'id': id,
            'name': gameName,
            'image': gameImg,
            'price': gamePrice
        }

        if (orderedGames) localStorage.setItem('game', JSON.stringify([...orderedGames, newGames]));
        else localStorage.setItem('game', JSON.stringify([{
            'id': id,
            'name': gameName,
            'image': gameImg,
            'price': gamePrice
        }]))
        setBoughtGame(false);

        console.log(price)
    }


    function handleRemoveGame(id) {
        let localStored = JSON.parse(localStorage.getItem('game', id));
        localStorage.setItem("game", JSON.stringify(localStored.filter(item => {
            console.log(item.id !== id)
        })));
        setBoughtGame(true);
    }


    return (
        <div>
            {boughtGame
                ? <button className="buynow_btnbuy" onClick={() => handleBuybtn(props.gameImg.cover.id, props.gameImg.name, props.gameImg.cover.image_id, 9.99)}>Buy</button>
                : <button className="buynow_btn" onClick={() => handleRemoveGame(props.gameImg.cover.name, props.gameImg.cover.id, props.gameImg.cover.image_id, 9.99)} > Bought</button>}
        </div >

    )
}

export default BuyNowBtn;
