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

    const totalCart = () => {
        return cart.reduce((acc, el) => acc + el.quantity*el.price, 0);
    }

    const emptyCart = () => {
        setCart( [] );
    }

    const deleteProduct = (id) => {
        setCart( cart.filter((el)=> el.id !== id) )
    }

    return (
        <cartContext.Provider value={
            { 
                cart, 
                addToCart, 
                isOnCart, 
                totalQuantity, 
                totalCart, 
                emptyCart, 
                deleteProduct
            }
            }>
            {children}
        </cartContext.Provider>
    );
}