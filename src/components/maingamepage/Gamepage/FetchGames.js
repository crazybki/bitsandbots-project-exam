import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { TOKEN, CLIENT_ID } from '../../consts/ApiInfo.js';
import loadingscreen from "../../../assets/loadingscreen.gif"
import Card from 'react-bootstrap/Card'
import Filtergames from './filtergames/Filtergames.js';
import SingleGame from './singlegame/SingleGame.js';

function FetchGames() {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(function () {
        async function getGames() {

            try {
                const res = await axios.post('https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games',
                    'fields name,platforms.*, cover.*, keywords.*, summary, multiplayer_modes, genres.*, release_dates.*; where release_dates > 2015; where genres != null; where multiplayer_modes != null; where platforms = (48, 167, 169, 49,130); where platforms != null; where cover != null; limit 500;',
                    {
                        headers: {
                            'Client-ID': '9jay5rpgh9e5f03sezyzk6bwodru0r',
                            'Authorization': 'Bearer sih2wquiomg7cce8pp2w0250muzw3do',
                            'x-requested-with': 'testing'
                        },
                    })
                setApiData(res.data);
                // console.log(res.data)
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

    return (
        <div className="fetchgames_cardcontainer">
            {apiData.map(games => {
                const { name, id } = games;
                console.log(id)

                return <div key={games.id}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img className="games_cardimg" variant="top" src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${games.cover.image_id}.jpg`} alt="Cover of `${games.name}`" />
                        <Card.Body>
                            <Card.Title>{games.name}</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                        <SingleGame id={id} name={name} />
                    </Card>
                </div>
            })}
        </div>
    )
}

export default FetchGames


