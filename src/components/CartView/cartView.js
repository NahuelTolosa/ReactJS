import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { BsFillTrashFill } from "react-icons/bs";
import './cartView.scss';

export const CartView = () => {

    const {cart, totalCart, emptyCart, deleteProduct} = useContext(cartContext);
    
    return (
        <main className='main'>
            <h2 className='title'>Carrito de compras</h2>
            <hr/>

            {/* Renderizado de campos del carrito */}
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
            <hr />

        {/* Renderizado de lista de productos */}
        {
            (cart.length == 0)
            ? <h4 className='title'>No hay elementos en el carrito</h4>
            : <div className='cart-body'>
                {
                    cart.map((el) =>(
                        <div key={el.id} className='cart-item'>
                            <div className='item'>
                                <h6>{el.name}</h6>
                            </div>
                            <div className='item'>
                                <p>{el.quantity}</p>
                            </div>
                            <div className='item'>
                                <p>${el.price}</p>
                            </div>
                            <div className='item' onClick={() => deleteProduct(el.id)}>
                                <span><BsFillTrashFill /></span>
                            </div>
                        </div>
                    ))
                }
                <hr />

                {/* Muestra de total */}
                <div className = 'total'>
                    <div className='total__title'>
                        <h4>Total</h4>
                    </div>
                    <div className='total__price'>
                        <h6>${totalCart()}</h6>
                    </div>
                </div>
                <hr />

                {/* Muestra de boton de vaciar carrito */}
                <div className= 'empty-cart'>
                    <button className='empty-button' onClick={emptyCart}>Vaciar Carrito</button>
                </div>
            </div>

        }
        </main>
        
    );
}