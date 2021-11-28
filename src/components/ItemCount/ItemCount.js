import React, {useState} from 'react';
import { Counter } from '../Hook/Counter';
import './ItemCount.scss';

export const ItemCount = ({initial=0, stock=0}) => {

    const {counter,increment,decrement} = Counter(initial,stock);

    return (
        <div className='item-container'>

            <div className='item-container__button'>
                <button className='less' onClick={decrement}>-</button>
            </div>

            <div className = 'item-container__number'>
                <p className='number'>{counter}</p>
            </div>

            <div className='item-container__button'>
                <button className='plus' onClick={increment}>+</button>
            </div>

        </div>
        
    );

}