import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CheckoutView = () => {

    const {cart} = useContext(CartContext);

    const createOreder = () => {
        const order = {
            buyer: {
                name: 'aaa',
                email: 'aaa@aaa.com',
                phone: '2235777777'

            },
            items: cart
        }
        console.log(order);
    }

    return (

        <div>
            <h2>Resumen de la compra</h2>
            <hr/>
            

            <button onClick={createOreder}>Finalizar</button>
        </div>

    );
}