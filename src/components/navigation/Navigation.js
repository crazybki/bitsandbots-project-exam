import React from 'react';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';



function Navigation() {


    return (
        <div className="navgation_container">
            <div className="navigation_cartcontainer">
                <img className="navigation_logo" src={logo} />
                <img className="navigation_cart" src={cart} />
            </div>
        </div>

    );
}

export default Navigation
