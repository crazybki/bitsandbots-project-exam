import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider(props) {
    console.log(props)
    return (
        <>
            <Carousel interval={null}>
                {props.images.screenshots.map(imgtag => {
                    console.log(imgtag.id)
                    return <Carousel.Item>
                        <img key={imgtag.id} className="d-block w-100" alt={`the game ${imgtag.name}`} src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${imgtag.image_id}.jpg`}
                            className="d-block mx-auto imgcontainer "
                        />
                    </Carousel.Item>
                })}
            </Carousel>
        </>
    )
}

export default ImageSlider
