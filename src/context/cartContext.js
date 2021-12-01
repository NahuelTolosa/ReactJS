import React, { useState, createContext } from 'react';

export const cartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    console.log(cart);


    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const isOnCart = (id) => {
        return cart.some((el) => el.id === id);
    }

    const totalQuantity = () => {
        return cart.reduce((acc,el) => acc + el.quantity,0);
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, isOnCart, totalQuantity }}>
            {children}
        </cartContext.Provider>
    );
}