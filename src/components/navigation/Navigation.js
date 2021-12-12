import React, { useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../../assets/logo.png';




function Navigation() {

    const [getData, setGetData] = useState(localStorage.getItem('Email'))

    let history = useHistory();

    function logOut() {
        localStorage.clear('Email', 'Password');
        history.push('/')
    }

    return (
        <div className="navgation_container">
            <div className="navigation_cartcontainer">
                <img className="navigation_logo" src={logo} alt="logo bits&bots" />
                <div className="navigation_cartimg">
                    {getData ? <button className="navigation_logout" onClick={logOut}>Log out</button> : ''}
                </div>
            </div>
        </div>

    );
}

export default Navigation
