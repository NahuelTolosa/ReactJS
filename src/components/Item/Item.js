import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Item.scss';

export const Item = ({product}) => {

    return (
        <div className = 'img-containter'>
            <div className= 'img-containter__img'>
                <img src={product.image} alt={product.description}></img>
            </div>
            <div className = 'img-containter__info'>
                <h2>{product.name}</h2>
                <h4>${product.price}</h4>
                <button className='more'><Link className="link" to={`/item/${product.id}`}>Ver mas</Link></button>
                
            </div>
        </div>
    );

}