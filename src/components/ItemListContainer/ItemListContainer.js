import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router';
import './ItemListContainer.scss';
import {database} from '../Firebase/Config';
import { collection, getDocs, query, where} from 'firebase/firestore/lite';

export const ItemListContainer = () => {

    const [list,setList] = useState([]);
    const { category } = useParams();

    useEffect(async() => {

        const _query = category 
                        ? query(collection(database, 'products'), where('category', '==', category))
                        : collection(database, 'products');

        getDocs(_query)
            .then(ans => {
                const products = ans.docs.map((el) => {
                    return {
                        id: el.id,
                        ...el.data()
                    }
                });

                setList(products);
                // console.log(products);
            })
            .catch('Error...');

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