import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { TOKEN, CLIENT_ID } from '../../consts/ApiInfo.js';
import loadingscreen from "../../../assets/loadingscreen.gif"
import Card from 'react-bootstrap/Card'
import SingleGame from './singlegame/SingleGame.js';
import ReactPaginate from 'react-paginate';
import BuyNowBtn from '../button/BuyNowBtn.js';




function FetchGames(prop) {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Filter useState
    const [filteredGames, setfilteredGames] = useState([])


    useEffect(function () {
        async function getGames() {

            try {
                const res = await axios.post('https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games',
                    'fields name, genres.*, artworks.*, cover.*, rating, screenshots.*, videos.*; where cover != null; where videos != null; where release_dates.platform = (48,49,6); limit 120;',
                    {
                        headers: {
                            'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                            'Authorization': 'Bearer x52tpyte8uwg06pm8hibfn0l6u3jhy',
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



    if (loading) {
        return <div className="fetchgame_loadingscreen">
            <img src={loadingscreen} className="fetchgame_loadingimg" />
        </div>
    }

    if (error) {
        return <div>Error: An error occured</div>
    }

    //Filters on genres

    let adventure = apiData.filter(e => e.genres[0].name === "Adventure")
    let shooter = apiData.filter(e => e.genres[0].name === "Shooter")
    let simulator = apiData.filter(e => e.genres[0].name === "Simulator")
    let racing = apiData.filter(e => e.genres[0].name === "Racing")

    function handleFilterAdventure() {
        setfilteredGames(adventure)
    }

    function handleFilterShooter() {
        setfilteredGames(shooter)
    }

    function handleFilterSimulator() {
        setfilteredGames(simulator)
    }

    function handleFilterRacing() {
        setfilteredGames(racing)
    }

    function handleRemoveFilter() {
        setfilteredGames(apiData);
    }


    return (
        <>
            <div className="fetchgames_container">
                <h1>Bits and Bots</h1>
                <div className="fetchgame_flexcontbtn">
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btn" onClick={() => handleFilterAdventure()}>Adventure</button>
                    </div>
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btn" onClick={() => handleFilterShooter()}>Shooter</button>
                    </div>
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btn" onClick={() => handleFilterSimulator()}>Simulator</button>
                    </div>
                    <div className="fetchgame_btndiv">
                        <button className="fetchgame_btn" onClick={() => handleFilterRacing()}>Racing</button>
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
                                <img className="games_cardimg" variant="top" src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${item.cover.image_id}.jpg`} alt="Cover of `${games.name}`" />
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


