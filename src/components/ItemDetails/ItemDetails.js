import React from "react";

export const ItemDetails = ({item}) => {

    return (
        <div>
            <h6>Name: {item.name}</h6>
            <h6>Description: {item.description}</h6>
            <h6>Stock: {item.stock}</h6>
        </div>
    );
}