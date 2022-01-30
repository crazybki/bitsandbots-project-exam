import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import ImageSlider from './imgslider/ImageSlider';
import SingleGameBtn from '../../button/SingleGameBtn';
import loadingscreen from '../../../../assets/loadingscreen.gif'





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
                                'Authorization': 'Bearer z68t42ew7v2n6ejr7j4q4hjdsh9jjf',
                                'x-requested-with': 'testing'
                            },
                        });

                    setGame(response.data[0])

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
        return <div className="fetchgame_loadingscreen">
            <img alt="loading screen for fetching single game" src={loadingscreen} className="fetchgame_loadingimg" />
        </div>
    }

    if (error) {
        return <div>An error occured</div>
    }
    let youtubeid = game.videos[0].video_id

    console.log(game)

    return (
        <>
            <ImageSlider images={game} />
            <h1 className="singlegame_heading1">{game.name}</h1>

            <div className="singlegame_btncontainer">
                <div className="singlegame_background">
                    <SingleGameBtn singlegameBtn={game} />
                </div>
            </div>

            <div className="singlegame_sumdetailscontainer">
                <div className="singlegame_summarycontainer">
                    <h3 className="singlegame_gameheading">Summary</h3>
                    <p>{game.summary}</p>
                </div>
                <div className="singlegame_gamedetails">
                    <h3 className="singlegame_gameheading">Game details</h3>
                    <p className="singlegame_details">Genre: {game.genres[0].name}</p>

                    <p className="singlegame_details">Platform: {game.platforms[0].abbreviation}</p>
                    <p className="singlegame_details">Release date: {game.release_dates[0].human}</p>
                    <div>
                        <p className="singlegame_details">Rating: {Math.floor(game.rating)}</p>
                    </div>
                </div>
            </div>

            <div className="singlegame_ratingcontainer">
                <div className="singlegame_videocontainer">
                    <iframe
                        width="700"
                        height="380"
                        className="singelgame_video"
                        src={`https://www.youtube.com/embed/${youtubeid}`}
                        title={game.name}
                    />
                </div>
                <p className="singlegame_emptycontainer"></p>
            </div>
        </>
    );
}


export default FetchSingleGame

