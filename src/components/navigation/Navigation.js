import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context/CartContext';
import { useHistory } from 'react-router';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';



function Navigation() {

    let history = useHistory();

    const [number, setNumber] = useState(0)
    function logOut() {

        localStorage.clear('Email');
        localStorage.clear('Password');

        history.push('/')
    }
    const gameSaved = useContext(Context)

    useEffect(() => {
        function updateCart() {

        }
        updateCart()
    }, [])

    return (
        <div className="navgation_container">
            <div className="navigation_cartcontainer">
                <img className="navigation_logo" src={logo} />
                <div>
                    <img className="navigation_cart" src={cart} />
                    <p className="navigation_numberitems">{gameSaved}</p>
                    <button className="navigation_logout" onClick={logOut}>Log out</button>
                </div>
            </div>
        </div>

    );
}

export default Navigation
