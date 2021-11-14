import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';


function FetchSingleGame() {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api = 'https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games';

    let history = useHistory();

    const { id } = useParams();

    if (!id) {
        history.push("/");
    }

    const url = api + "/" + id;

    useEffect(
        function () {
            async function fetchData() {
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

                    if (res.ok) {
                        const json = await res.json();
                        setGame(json);
                    } else {
                        setError("An error occured");
                    }
                } catch (error) {
                    setError(error.toString());
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        },
        [url]
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (
        <div>
            {game.map(gameData => {
                console.log('singlegame' + gameData)
                return <div>
                    <p>{gameData.name}</p>
                    <p>{gameData.summary}</p>
                </div>
            })}
        </div>
    );
}


export default FetchSingleGame

