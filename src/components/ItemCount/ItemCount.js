import React, {useState} from 'react';
import './ItemCount.scss';

export const ItemCount = () => {

    let [clicks, setClicks] = useState(0);

    const increaseClicks = () => {
        setClicks(clicks + 1);
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