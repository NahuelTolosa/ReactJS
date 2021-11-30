import React from "react";
import './Item.scss';
import { ItemCount } from "../ItemCount/ItemCount";
import { useCounter } from "../Hook/useCounter";

export const Item = ({product}) => {

    const { counter, increment, decrement } = useCounter(1, product.stock);

    const handlerAdd = () => {
        console.log({
            id: product.id,
            id: product.name,
            id: product.price,
            id: product.description,
            quantity: counter
        })
    }

    return (
        <div className = 'img-containter'>
            <div className= 'img-containter__img'>
                <img src={product.image} alt={product.description}></img>
            </div>
            <div className = 'img-containter__info'>
                <h2>{product.name}</h2>
                <h4>${product.price}</h4>
                <ItemCount 
                    increment ={increment} 
                    decrement={decrement} 
                    onAdd={handlerAdd}
                    counter={counter}
                />
            </div>
        </div>
    );

}