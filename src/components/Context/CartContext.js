import { createContext } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const item = localStorage.getItem('games');
    // let gameSaved = JSON.parse(item).length;


    return <Context.Provider >{children}</Context.Provider>

};

export default CartContext

