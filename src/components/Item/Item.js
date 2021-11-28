import React from "react";

export const Item = ({product}) => {

    return (
        <div>
            <h3>Name: {product.name}</h3>
            <p>Descripción: {product.description}</p>
            <hr />
        </div>
    );

}