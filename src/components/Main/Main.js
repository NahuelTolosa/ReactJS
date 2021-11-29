import React from "react";
import './Main.scss';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const Main = () => {

    return (
        <main className = 'main'>
            <ItemListContainer />
        </main>
    );
}