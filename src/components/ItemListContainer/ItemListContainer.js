import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GetItems } from "../Utils/GetItems";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router';
import './ItemListContainer.scss';

export const ItemListContainer = () => {

    const [list,setList] = useState([]);
    const { category } = useParams();

    useEffect( () => {

        GetItems()
            .then((ans) => {
                (category)
                ? setList(ans.filter((el) => el.category === category))
                : setList(ans);
            })
            .catch( (err) => {
                console.log(err);
            });

    }, [category]);

    return (
        <main className='main'>
            <h3 className ='title'>Lista de productos</h3>
            <section>
                <ItemList products = {list} />
            </section>
        </main>
    );
}