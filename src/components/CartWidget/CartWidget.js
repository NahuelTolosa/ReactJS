import React, { useContext } from "react";
import {BsCartFill} from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import './CartWidget.scss';

export const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext);

    return (
        <div class="d-flex cartWidget">
            <BsCartFill />
            <span className = 'counter-icon'>{totalQuantity()}</span>
        </div >
    );
}