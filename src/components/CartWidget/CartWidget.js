import React from "react";
import './CartWidget.scss';
import {BsCartFill} from "react-icons/bs";

export const CartWidget = () => {

    return (
        <div class="d-flex cartWidget">
            <BsCartFill />
        </div >
    );
}