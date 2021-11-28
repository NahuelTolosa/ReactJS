import React, {useState} from 'react';

export const Counter = (initial = 0, stock = 0) => {

    const [counter, setCounter] = useState(initial);

    const increment = () => {
        stock>counter && setCounter(counter + 1);
    }

    const decrement = () => {
       initial<counter && setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        decrement
    }

}