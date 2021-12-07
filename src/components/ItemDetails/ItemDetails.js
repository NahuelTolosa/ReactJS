import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../Hook/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetails.scss';

export const ItemDetails = ({ product }) => {

    const { addToCart, isOnCart } = useContext(CartContext);
    const { counter, increment, decrement } = useCounter(1, product.stock);

    const handlerAdd = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: counter
        });
        // alert('Producto agregado al carrito.');
    }

    const checkCart = (id) => {
        return isOnCart(id);
    }

    return (
        <div className='details'>
            <div className='image'>
                <img src={`../${product.image}`} alt={product.description}></img>
            </div>

            <div className='aside'>
                <div className='info'>
                    <h5>Name: <span>{product.name}</span></h5>
                    <hr/>
                    <h6>Description: <span>{product.description}</span></h6>
                    <h6>Precio: <span>${product.price}</span></h6>
                    <h6>Disponibilidad: <span>{product.stock} unidades</span></h6>
                </div>
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