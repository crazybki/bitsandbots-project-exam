import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleGame({ name, id }) {

    return (
        <div>
            <Link to={`game/${id}`}>
                <p>{name}</p>
            </Link>
        </div>
    )
}


SingleGame.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default SingleGame
