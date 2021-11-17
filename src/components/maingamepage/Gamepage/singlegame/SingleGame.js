import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleGame({ name, id }) {
    console.log(name)
    return (
        <div>
            <Link to={`fetchsinglegame/${id}`}>
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
