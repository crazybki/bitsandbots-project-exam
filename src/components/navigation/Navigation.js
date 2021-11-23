import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';



function Navigation() {

    let history = useHistory();


    function logOut() {

        localStorage.clear('Email');
        localStorage.clear('Password');

        history.push('/')
    }

    return (
        <div className="navgation_container">
            <div className="navigation_cartcontainer">
                <img className="navigation_logo" src={logo} />
                <div>
                    <img className="navigation_cart" src={cart} />
                    <button className="navigation_logout" onClick={logOut}>Log out</button>
                </div>
            </div>
        </div>

    );
}

export default Navigation
