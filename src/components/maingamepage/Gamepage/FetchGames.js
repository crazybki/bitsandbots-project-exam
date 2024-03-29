import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import loadingscreen from "../../../assets/loadingscreen.gif"
import SingleGame from './singlegame/SingleGame.js';
import BuyNowBtn from '../button/BuyNowBtn.js';
import { Link } from "react-router-dom";


function FetchGames() {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //Filter useState
    const [filteredGames, setfilteredGames] = useState([])

    //Filters on genres

    let rpg = apiData.filter(e => e.genres[0].name === "Adventure")
    let shooter = apiData.filter(e => e.genres[0].name === "Shooter")
    let pointAndClick = apiData.filter(e => e.genres[0].name === "Role-playing (RPG)")



    useEffect(function () {
        async function getGames() {

            try {
                const res = await axios.post('https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games',
                    'fields name, genres.*, artworks.*, cover.*, rating, screenshots.*, videos.*; where cover != null; where name = *"Human"*; where videos != null; where release_dates.platform = (48,49); limit 95;',
                    {
                        headers: {
                            'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                            'Authorization': 'Bearer 91awzawgduhn7e5gdj29prby1fx4ss',
                            'x-requested-with': 'testing'
                        },
                    });
                setApiData(res.data);
                console.log(apiData)
                setfilteredGames(res.data)
            }
            catch (error) {
                setError(error.toString())
                console.log(error)
            }

            finally {
                setLoading(false)
            }
        }
        getGames()
    }, [])

    console.log(apiData)


    if (loading) {
        return <div className="fetchgame_loadingscreen">
            <img alt="loading screen for gamespage" src={loadingscreen} className="fetchgame_loadingimg" />
        </div>
    }

    if (error) {
        return <div>Error: An error occured</div>
    }


    function handleFilterRpg() {
        setfilteredGames(rpg)
    }

    function handleFilterShooter() {
        setfilteredGames(shooter)
    }

    function handleFilterpointAndClick() {
        setfilteredGames(pointAndClick)
    }

    function handleRemoveFilter() {
        setfilteredGames(apiData);
    }


    return (
        <>
            <div className="fetchgames_container">
                <h1 className="fetchgames_heading1">Bits and Bots</h1>
                <div>
                    <Link className="fetchgames_anchor" to="/addtocart">
                        <div className="fetchgame_linkcontainer">
                            <p className="fetchgame_cartlink">Your cart items</p>
                        </div>
                    </Link>
                </div>
                <p className="fetchgames_genreheading">Looking for a special genre?</p>
                <div className="fetchgame_flexcontbtn">
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btn" onClick={() => handleFilterRpg()}>Adventure</button>
                    </div>
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btnshooter" onClick={() => handleFilterShooter()}>Shooter</button>
                    </div>
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btnrpg" onClick={() => handleFilterpointAndClick()}>RPG</button>
                    </div>
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btn" onClick={() => handleRemoveFilter()}>Remove filter</button>
                    </div>
                </div>

                <div className="fetchgames_cardcontainer">
                    {filteredGames.map(item => {
                        const { name, id } = item;
                        return <div key={item.id}>
                            <div className="fetchgame_container">
                                <img className="games_cardimg" variant="top" src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${item.cover.image_id}.jpg`} alt="Cover of the different games on frontpage" />
                                <div className="fetchgames_titlecontainer">
                                    <h2 className="games_title">{item.name}</h2>
                                </div>
                                <div className="fetchgame_btncontainer">
                                    <BuyNowBtn gameName={item.name} gameImg={item} />
                                    <p>$9.99</p>
                                    <SingleGame id={id} name={name} />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default FetchGames


