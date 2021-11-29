import React from "react";
import './Item.scss';
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({product}) => {

    return (
        <div className = 'img-containter'>
            <div className= 'img-containter__img'>
                <img src={product.image} alt={product.description}></img>
            </div>
            <div className = 'img-containter__info'>
                <h2>{product.name}</h2>
                <h4>${product.price}</h4>
                <ItemCount initial='1' stock= {product.stock}/>
            </div>
        </div>
    );

}