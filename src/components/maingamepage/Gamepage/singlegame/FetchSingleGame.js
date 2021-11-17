import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';


function FetchSingleGame() {

    const idGames = 'where id = (5000, 85031)';

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let urlPush = useHistory();

    const { id } = useParams();

    if (!id) {
        urlPush.push()
    }

    const gameUrl = 'https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games';
    console.log(gameUrl)
    useEffect(
        function () {
            async function getSingleGame() {
                try {
                    const response = await axios.post(gameUrl,
                        'fields name,platforms.*, cover.*, keywords.*, summary, multiplayer_modes, genres.*, release_dates.*, where id = (5000);',
                        {
                            headers: {
                                'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                                'Authorization': 'Bearer x52tpyte8uwg06pm8hibfn0l6u3jhy',
                                'x-requested-with': 'testing'
                            },
                        });

                    if (response.ok) {
                        const jsonResponse = await response.json();
                        console.log(jsonResponse)
                        setGame(jsonResponse)
                    } else {
                        setError('An error occured')
                    }
                }
                catch (error) {
                    setError(error.toString())
                }

                finally {
                    setLoading(true)
                }
            }
            getSingleGame()
        }, [gameUrl]
    )

    if (loading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>An error occured</div>
    }

    return (
        <div>
            <p>{game.name}</p>
        </div>
    );
}


export default FetchSingleGame

