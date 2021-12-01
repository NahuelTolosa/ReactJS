import React, { useContext } from "react";
import './Item.scss';
import { ItemCount } from "../ItemCount/ItemCount";
import { useCounter } from "../Hook/useCounter";
import { cartContext } from "../../context/cartContext";

export const Item = ({product}) => {

    const { addToCart, isOnCart } = useContext(cartContext);

    const { counter, increment, decrement } = useCounter(1, product.stock);

    const handlerAdd = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: counter
        });
        alert('Producto agregado al carrito.');
    }

    const checkCart = (id) => {
        return isOnCart(id);
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
                    checkCart={checkCart}
                    product={product}
                    counter={counter}
                />
            </div>
        </div>
    );

}