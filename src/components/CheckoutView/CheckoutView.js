import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Timestamp,collection,addDoc} from 'firebase/firestore/lite';
import { database } from '../Firebase/Config';

export const CheckoutView = () => {

    const { cart, totalCart} = useContext(CartContext);

    const createOreder = () => {
        const order = {
            buyer: {
                name: 'Cliente',
                email: 'cliente@mail.com',
                phone: '2235777777'

            },
            items: cart,
            total: totalCart(),
            date: Timestamp.fromDate(new Date())
        }    

        const ordersRef = collection(database,'orders');

        addDoc(ordersRef, order)
            .then((ans) => alert('Orden realizada con éxito'));

    }
    return (

        <div>
            <h2>Resumen de la compra</h2>
            <hr/>
            

            <button onClick={createOreder}>Finalizar</button>
        </div>

    );
}