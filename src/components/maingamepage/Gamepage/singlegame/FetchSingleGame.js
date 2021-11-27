import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import ImageSlider from './imgslider/ImageSlider';
import SingleGameBtn from '../../button/SingleGameBtn';
import Prices from '../../button/Prices';




function FetchSingleGame() {


    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let urlPush = useHistory();

    const { id } = useParams();


    if (!id) {
        urlPush.push()
    }

    const gameUrl = 'https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games/';

    useEffect(
        function () {
            async function getSingleGame() {
                try {
                    const response = await axios.post(gameUrl,
                        'fields name, external_games.*, storyline, release_dates.*, screenshots.image_id; where screenshots != null; where id = (' + id + ');',
                        {
                            headers: {
                                'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                                'Authorization': 'Bearer x52tpyte8uwg06pm8hibfn0l6u3jhy',
                                'x-requested-with': 'testing'
                            },
                        });




                    setGame(response.data[0])
                    console.log(response.data)


                }
                catch (error) {
                    setError(error.toString())
                }

                finally {
                    setLoading(false)
                }
            }
            getSingleGame()
        }, [id]
    )

    if (loading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>An error occured</div>
    }

    return (
        <div>
            <ImageSlider images={game} />
            <p>name: {game.name}</p>
            <p>summary: {game.summary}</p>
            <Prices />
            <SingleGameBtn singlegameBtn={game.name} />
        </div>
    );
}


export default FetchSingleGame

