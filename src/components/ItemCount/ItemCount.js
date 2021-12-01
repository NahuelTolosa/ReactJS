import React from 'react';
import { Link } from "react-router-dom";
import './ItemCount.scss';

export const ItemCount = ({ increment, decrement, onAdd, checkCart, product, counter}) => {

    return (

        <div className = 'button-container'>
            {
            !checkCart(product.id)

                ?(<div>
                    <div className='item-container option'>

                        <div className='item-container__button'>
                            <button className='less' onClick={decrement}>-</button>
                        </div>

                        <div className = 'item-container__number'>
                            <p className='number'>{counter}</p>
                        </div>

                        <div className='item-container__button' onClick={increment}>
                            <button className='plus'>+</button>
                        </div>

                    </div>

                    <div className='item-container__option option'>
                        <button className='option__button' onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>)
            
                :(<div className='item-container__option option'>
                    <Link class="option__button" to='/cart'>Ver Carrito</Link>
                </div>)
            }
        </div>
        
    );

}