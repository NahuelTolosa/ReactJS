import React, { useContext } from "react";
import {BsCartFill} from "react-icons/bs";
import { cartContext } from "../../context/cartContext";
import './CartWidget.scss';

export const CartWidget = () => {

    const {totalQuantity} = useContext(cartContext);

    return (
        <div class="d-flex cartWidget">
            <BsCartFill />
            <span className = 'counter-icon'>{totalQuantity()}</span>
        </div >
    );
}