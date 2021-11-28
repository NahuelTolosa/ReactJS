import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GetItems } from "../Utils/GetItems";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

    const [list,setList] = useState([]);

    useEffect( () => {

        GetItems()
            .then((ans) => {
                setList(ans);
                console.log(ans);
            })
            .catch( (err) => {
                console.log(err);
            });

    }, []);

    return (
        <ItemList products = {list} />
    );
}