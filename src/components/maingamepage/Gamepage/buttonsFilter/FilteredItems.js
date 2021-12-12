import React from 'react'
import BuyNowBtn from '../../button/BuyNowBtn.js';
import SingleGame from '../singlegame/SingleGame.js';
import Card from 'react-bootstrap/Card'


function FilteredItems(props) {
    console.log(props)
    return (
        <div className="fetchgames_cardcontainer">
            {props.filteredElements.map(games => {
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
    )
}

export default FilteredItems
