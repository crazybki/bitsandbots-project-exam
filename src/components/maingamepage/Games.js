import React from 'react';
import FetchGames from './Gamepage/FetchGames';
import LoginCheck from './loggedInCheck/LoginCheck';


function Games() {


    return (
        <div>
            <FetchGames />
            <LoginCheck />
        </div>
    )
}

export default Games
