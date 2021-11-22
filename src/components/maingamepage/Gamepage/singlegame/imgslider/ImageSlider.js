import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider(props) {
    console.log(props)
    return (
        <>
            <Carousel>
                {props.images.screenshots.map(imgtag => {
                    console.log(imgtag)
                    return <Carousel.Item>
                        <img key={imgtag.id} src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${imgtag.image_id}.jpg`}
                            className="d-block mx-auto imgcontainer "
                        />
                    </Carousel.Item>    
                })}
            </Carousel>
        </>
    )
}

export default ImageSlider
