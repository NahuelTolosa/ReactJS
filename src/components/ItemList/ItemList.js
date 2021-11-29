import React from "react";
import { Item } from "../Item/Item";
import './ItemList.scss'

export const ItemList = ({products}) => {

    return (
        <div className = 'main-grid'>
            {
                products.map( (element) => ( 
                    <Item product = {element}/> 
                ) )
            }
        </div>
        
    );
    
}