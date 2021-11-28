import React, {useState} from 'react';
import './ItemCount.scss';

export const ItemCount = ({stock}) => {

    let [clicks, setClicks] = useState(0);

    const increaseClicks = () => {
        (stock == 0) ? 
        (alert(`No hay stock disponible.`)) :
        (   
            (clicks < stock) ? 
            setClicks(clicks + 1) : 
            (alert(`Solo hay stock de ${stock} artículos.`))
        );
    }

    const decreaseClicks = () => {
        if (clicks > 0)
            setClicks(clicks - 1);
    }

    return (
        <div className='item-container'>

            <div className='item-container__button'>
                <button className = 'less' onClick = {decreaseClicks}>-</button>
            </div>

            <div className = 'item-container__number'>
                <p className = 'number'>{clicks}</p>
            </div>

            <div className='item-container__button'>
                <button className='plus' onClick={increaseClicks}>+</button>
            </div>

        </div>
        
    );

}