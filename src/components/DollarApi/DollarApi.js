import React, { useEffect, useState } from 'react';
import './DollarApi.scss';

export const DollarApi = ({value = 'blue'}) => {

    const [dollar,setDollar] = useState();

        useEffect(()=>{
            fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
                .then(res => res.json())
                .then(data => {
                    value == 'official' && setDollar(data[0]['casa']);
                    value == 'blue' && setDollar(data[1]['casa']);
                })
       }, []);

    return (
        <>
            {
                dollar &&
                
                <div className = 'dollar'>

                    <div className = 'dollar__type'>
                        <p>{dollar['nombre']}</p>
                    </div>

                    <div className='dollar__data'>
                        <div>
                            <p>${dollar['compra']}</p>
                        </div>

                        <div>
                            <p>${dollar['venta']}</p>
                        </div>
                    </div>

                </div>
            }

            {value == 'official' && <hr/>}
        
        </>
        )
}