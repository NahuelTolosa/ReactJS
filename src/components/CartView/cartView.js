import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { BsFillTrashFill } from "react-icons/bs";
import './cartView.scss';

export const CartView = () => {

    const {cart} = useContext(cartContext);
    return (
        <main className='main'>
            <h2 className='title'>Carrito de compras</h2>
            <hr/>

            <div className = 'cart-header'>

                <div className = 'item'>
                    <p>Producto</p>
                </div>

                <div className='item'>
                    <p>Cantidad</p>
                </div>

                <div className='item'>
                    <p>Precio</p>
                </div>

                <div className='item'>
                    <p>Borrar</p>
                </div>

            </div>

            <div className='cart-body'>
                {
                    cart.map((el) =>(
                        <div key={el.id} className='cart-item'>
                            <div className='item'>
                                <h5>{el.name}</h5>
                            </div>
                            <div className='item'>
                                <p>{el.quantity}</p>
                            </div>
                            <div className='item'>
                                <p>${el.price}</p>
                            </div>
                            <div className='item'>
                                <span><BsFillTrashFill /></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
        
    );
}