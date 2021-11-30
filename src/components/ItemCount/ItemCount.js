import React, {useState} from 'react';
import { useCounter } from '../Hook/useCounter';
import './ItemCount.scss';

export const ItemCount = ({ increment, decrement, onAdd, counter}) => {

    return (
        <div className = 'button-container'>
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

            <div className='item-container__add option'>
                <button className='add' onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
        
        
    );

}