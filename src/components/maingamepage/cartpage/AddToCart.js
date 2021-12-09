import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddToCart() {

    const [retriveItems, setRetriveItems] = useState(JSON.parse(window.localStorage.getItem('game')));

    function removeCartItem(id) {
        localStorage.setItem("game", JSON.stringify(retriveItems.filter(item => {
            return item.id !== id
        })));
        let localStored = JSON.parse(localStorage.getItem('game', id));
        setRetriveItems(localStored)

    }


    console.log(retriveItems)

    return (
        <>
            <h1 className="addtocart_heading">You bought:</h1>
            <div>
                <Link to="/checkoutpage">
                    <button disabled={retriveItems.length < 1}>Continue to buy</button>
                </Link>
                {retriveItems.length > 0 ? retriveItems.map(item => {
                    return <div key={item.id} className="addtocart_container">
                        <img className="addtocart_image" src={`https://images.igdb.com/igdb/image/upload/t_logo_med/${item.image}.jpg`} alt="games in cart" />
                        <p className="addtocart_name">{item.name}</p>
                        <button className="addtocart_btn" onClick={() => removeCartItem(item.id)}>X</button>
                    </div>
                }) : <p>No items in cart</p>}
            </div>
        </>
    )
}

export default AddToCart
