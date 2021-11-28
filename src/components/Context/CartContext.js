import { createContext } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {
    const item = localStorage.getItem('games');
    const gameSaved = JSON.parse(item).length;


    return <Context.Provider value={gameSaved}>{children}</Context.Provider>

};

export default CartContext

