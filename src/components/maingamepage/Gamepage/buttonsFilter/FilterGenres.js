import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import BuyNowBtn from '../../button/BuyNowBtn.js';
import SingleGame from '../singlegame/SingleGame.js';

function FilterGenres(props) {
    //getting the api id for genres
    const [plateform, setPlateform] = useState(0)

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = async (e) => {
        let id = e.target.value;
        setPlateform(plateform + id)
        const res = await axios.post('https://fast-escarpment-36214.herokuapp.com/https://api.igdb.com/v4/games',
            'fields name, cover.*; where platforms = (' + id + ');  where cover != null; limit 49;',
            {
                headers: {
                    'Client-ID': '5m9j3jdb2746nrudsybqcc7yuxuan4',
                    'Authorization': 'Bearer x52tpyte8uwg06pm8hibfn0l6u3jhy',
                    'x-requested-with': 'testing'
                },
            });
        setFilteredData(res.data)
        props.onFiltered(filteredData)
        console.log(id)
    }


    return (
        <div>
            <div className="filter_btncontainer">
                <button className="filter_btns" onClick={handleFilter} value={49}>XBOX</button>
                <button className="filter_btns" onClick={handleFilter} value={130}>PS4</button>
                <button className="filter_btns" onClick={handleFilter} value={49}>Nintendo</button>
                <button className="filter_btns" onClick={handleFilter} value={130}>PC</button>
            </div>
            <div className="fetchgames_cardcontainer">
                {filteredData.map(games => {
                    const { name, id } = games;
                    return <div key={games.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="games_cardimg" variant="top" src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${games.cover.image_id}.jpg`} alt="Cover of `${games.name}`" />
                            <Card.Body>
                                <Card.Title>{games.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Prices />
                            <SingleGame id={id} name={name} />
                            <BuyNowBtn gameName={games.name} />
                        </Card>
                    </div>
                })}
            </div>
        </div>
    )
}

export default FilterGenres

