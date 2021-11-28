import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({products}) => {

    return (
        <div>
            <hr />
            {
                products.map( (element) => ( 
                    <Item product = {element}/> 
                ) )
            }
        </div>
        
    );
    
}