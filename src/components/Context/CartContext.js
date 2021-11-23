import { createContext } from "react";



export const Context = createContext();

const CartContext = ({ children }) => {
    const gameSaved = JSON.parse(localStorage.games).length;

    return <Context.Provider value={gameSaved}>{children}</Context.Provider>

};

export default CartContext

