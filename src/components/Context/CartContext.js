import { useState } from "react";
import React from 'react'


const Storage = React.createContext([null, () => { }]);

export const CartContext = ({ children }) => {
    // const [localGames, setLocalGames] = useState(localStorage.getItem('games').length);


    return <Storage.Provider>{children}</Storage.Provider>;

};

export default CartContext


