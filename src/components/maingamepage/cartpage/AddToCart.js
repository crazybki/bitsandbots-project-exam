import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

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
             <Breadcrumb>
                 <Breadcrumb.Item href="games">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Add to cart</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="addtocart_heading">Your cart</h1>
            <div>
                <div className="addtocart_btns">
                    <Link to="/checkoutpage">
                        <button className="addtocart_continuebtn" disabled={retriveItems?.length === 0}>Continue</button>
                    </Link>
                    <Link to="/games">
                        <button className="addtocart_keepshopping">Keep shopping</button>
                    </Link>
                </div>
                {retriveItems.length > 0 ? retriveItems.map(item => {
                    return <div key={item.id} className="addtocart_background">
                        <div className="addtocart_container">
                            <div className="addtocart_overline"></div>
                            <img className="addtocart_image" src={`https://images.igdb.com/igdb/image/upload/t_logo_med/${item.image}.jpg`} alt="games in cart" />
                            <p className="addtocart_name">{item.name}</p>
                            <button className="addtocart_btn" onClick={() => removeCartItem(item.id)}>X</button>
                        </div>
                    </div>
                }) : <p className="addtocart_message">No items in cart</p>}
            </div>
            <div className="addtocart_footercontainer"></div>
        </>
    )
}

export default AddToCart
