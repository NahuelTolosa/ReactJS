import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GetItems } from "../Utils/GetItems";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.scss';

export const ItemListContainer = () => {

    const [list,setList] = useState([]);

    useEffect( () => {

        GetItems()
            .then((ans) => {
                setList(ans.filter((el) => el.isPopular === true));
            })
            .catch( (err) => {
                console.log(err);
            });

    }, []);

    return (
        <section>
            <h3 className = 'title'>Listado de productos</h3>
            <ItemList products = {list} />
        </section>
    );
}