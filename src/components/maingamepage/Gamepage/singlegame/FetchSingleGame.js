import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import ImageSlider from './imgslider/ImageSlider';
import SingleGameBtn from '../../button/SingleGameBtn';





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
                        'fields name, genres.*, artworks.*, platforms.*, release_dates.*, cover.*, summary, rating, screenshots.*, videos.*; where cover != null; where videos != null; where id = (' + id + ');',
                        {
                            headers: {
                                'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                                'Authorization': 'Bearer x52tpyte8uwg06pm8hibfn0l6u3jhy',
                                'x-requested-with': 'testing'
                            },
                        });

                    setGame(response.data[0])
                    console.log(game)
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
    let youtubeid = game.videos[0].video_id


    return (
        <>
            <ImageSlider images={game} />
            <h1 className="singlegame_heading1">{game.name}</h1>
            <div className="singlegame_btncontainer">
                <div className="singlegame_background">
                    <SingleGameBtn singlegameBtn={game.name} />
                </div>
            </div>
            <div className="singlegame_sumdetailscontainer">
                <div className="singlegame_summarycontainer">
                    <p>{game.summary}</p>
                </div>
                <div className="singlegame_gamedetails">
                    <h3 className="singlegame_gameheading">Game details</h3>
                    {game.genres.map(item => {
                        return <p>Genre: {item.name}</p>
                    })}
                    <p>Platform: {game.platforms[0].abbreviation}</p>
                    <p>Release date: {game.release_dates[0].human}</p>
                </div>
            </div>
            <div className="singlegame_ratingcontainer">
                <div className="singlegame_ratings">
                    <h2 className="singelgame_heading2">Rating</h2>
                    <p className="singlegame_ratingnumber">{Math.floor(game.rating)}</p>
                </div>
            </div>
            <iframe
                width="400"
                height="280"
                src={`https://www.youtube.com/embed/${youtubeid}`}
                title={game.name}
            />
        </>
    );
}


export default FetchSingleGame

