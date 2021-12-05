import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleGame({ name, id }) {

    return (
        <div className="singlegame_container">
            <Link to={`fetchsinglegame/${id}`}>
                <p className="singlegame_link">See more</p>
            </Link>
        </div>
    )
}


SingleGame.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default SingleGame
