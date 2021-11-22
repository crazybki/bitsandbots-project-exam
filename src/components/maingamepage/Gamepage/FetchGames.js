import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { TOKEN, CLIENT_ID } from '../../consts/ApiInfo.js';
import loadingscreen from "../../../assets/loadingscreen.gif"
import Card from 'react-bootstrap/Card'
import SingleGame from './singlegame/SingleGame.js';
import ReactPaginate from 'react-paginate';



function FetchGames() {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [pushPage, setpushPage] = useState(0);
    const [gamesInOnepage] = useState(10);
    const [pageCount, setPageCount] = useState(0)





    useEffect(function () {
        async function getGames() {

            try {
                const res = await axios.post('https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games',
                    'fields name,platforms.*, cover.*, keywords.*, summary, multiplayer_modes, release_dates.*; where platforms = (48, 49, 130); where cover != null; limit 200;',
                    {
                        headers: {
                            'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                            'Authorization': 'Bearer x52tpyte8uwg06pm8hibfn0l6u3jhy',
                            'x-requested-with': 'testing'
                        },
                    });
                setApiData(res.data);
                console.log(res.data)
                setPageCount(Math.ceil(res.data.length / gamesInOnepage))
                setApiData(res.data.slice(pushPage, pushPage + gamesInOnepage))
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
    }, [pushPage])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        console.log(selectedPage * gamesInOnepage)

        setpushPage((selectedPage + 1) * gamesInOnepage)

    }


    if (loading) {
        return <div className="fetchgame_loadingscreen">
            <img src={loadingscreen} className="fetchgame_loadingimg" />
        </div>
    }

    if (error) {
        return <div>Error: An error occured</div>
    }



    return (
        <>
            <div className="fetchgames_container">
                <h1>Bits and Bots</h1>
                <div className="fetchgames_cardcontainer">
                    {apiData.map(games => {
                        const { name, id } = games;
                        return <div key={games.id}>
                            <Card style={{ width: '18rem' }}>
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
                <div className="fetchgame_paginatecontainer">
                    <ReactPaginate
                        previousLabel={"< previous"}
                        nextLabel={"next >"}
                        breakLabel={"..."}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName={"page-item"}
                        breakLinkClassName="page-link"
                        pageCount={pageCount}
                        marginPagesDisplayed={5}
                        pageRangeDisplayed={4}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </>
    )
}

export default FetchGames


