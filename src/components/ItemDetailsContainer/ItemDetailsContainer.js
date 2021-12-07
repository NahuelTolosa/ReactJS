import React, { useEffect, useState } from 'react';
import { GetItemById } from '../Utils/GetItems.js';
import { ItemDetails } from '../ItemDetails/ItemDetails.js'
import { useParams } from 'react-router';

export const ItemDetailsContainer = () => {
    
    const [product,setProduct] = useState(null);
    const { id } = useParams();

    useEffect(()=> {
        GetItemById(id)
            .then(ans => setProduct(ans))
    }, []);

    console.log(product);

    return (
        <div className='main'>
        {
                product && <ItemDetails product={product} />
        }
        </div>
    );

}