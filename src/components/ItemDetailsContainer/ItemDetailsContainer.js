import React, { useEffect, useState } from 'react';
import { GetItemById } from '../Utils/GetItems';
import { ItemDetails } from '../ItemDetails/ItemDetails.js'

export const ItemDetailsContainer = () => {

    const [item,setItem] = useState(null);

    useEffect(()=> {
        GetItemById("B01")
            .then(ans => setItem(ans))
    }, []);

    return (
        <div>
        {
           item && <ItemDetails item = {item} />
        }
        </div>
    );

}