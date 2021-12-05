import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../assets/logo.png';



function Navigation() {


    let history = useHistory();

    function logOut() {

        localStorage.clear('Email', 'Password');
        history.push('/')
    }

    return (
        <div className="navgation_container">
            <div className="navigation_cartcontainer">
                <img className="navigation_logo" src={logo} alt="logog bits&bots" />
                <div className="navigation_cartimg">
                    <button className="navigation_logout" onClick={logOut}>Log out</button>
                </div>
            </div>
        </div>

    );
}

export default Navigation
