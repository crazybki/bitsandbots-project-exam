import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';


function LoginCheck() {

    let history = useHistory();

    const [useEmail,] = useState(localStorage.getItem('Email'));
    const [usePassword,] = useState(localStorage.getItem('Password'));

    if (useEmail === null && usePassword === null) {
        history.push('/')
    }

    return (
        <div>

        </div>
    )
}

export default LoginCheck
