import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {Timestamp,collection,addDoc} from 'firebase/firestore/lite';
import { database } from '../Firebase/Config';
import './Checkout.scss';
import { Link } from 'react-router-dom';

export const CheckoutView = () => {

    const [orderID,setOrderID] = useState(null);

    const [values, setValues] = useState({name:'',mail:'',phone:''});

    const { cart, totalCart, emptyCart} = useContext(CartContext);

    const createOreder = (buyer) => {
        const order = {
            buyer: buyer,
            items: cart,
            total: totalCart(),
            date: Timestamp.fromDate(new Date())
        }    

        const ordersRef = collection(database,'orders');

        addDoc(ordersRef, order)
            .then((ans) =>{
                alert('Orden realizada con éxito');
                setOrderID(ans.id);
            });

    }

    const handleValues = (e) => {

        setValues({
            ...values,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createOreder(values)
    }

    return (

        <main className='main'>
            {
                orderID
                    ?
                      <>
                        <h3>Su numero de compra es: {orderID}</h3>
                        <h5>Detalle de compra</h5>
                      </>

                    :
                    <>
                        <h3>Resumen de la compra</h3>
                    </>
                      
            }   
            {/* Renderizado de campos */}
            <div className = 'order-header'>

                <div className = 'item'>
                    <p>Producto</p>
                </div>

                <div className='item'>
                    <p>Cantidad</p>
                </div>

                <div className='item'>
                    <p>Precio Unitario</p>
                </div>

            </div>
            <hr />

            <div className='order-body'>
                {
                    cart.map((el) =>(
                        <div key={el.id} className='order-item'>
                        <div className='item'>
                            <h6>{el.name}</h6>
                        </div>
                        <div className='item'>
                            <p>{el.quantity}</p>
                        </div>
                        <div className='item'>
                            <p>${el.price}</p>
                        </div>
                    </div>
                    ))
                }
                    <hr />
                    <div className='total'>
                        <div className='total__title'>
                            <h4>Total</h4>
                        </div>
                        <div className='total__price'>
                            <h6>${totalCart()}</h6>
                        </div>
                    </div>
                    <hr />
            </div>

            {
                !orderID 

                ?
                    <>
                        <h5>Complete con sus datos personales</h5>

                        <form className='form' onSubmit={handleSubmit}>

                            <div className='form__field'>
                                <label>Nombre</label>
                                <input name='name' value={values.name} onChange={handleValues} className='input' type='text' placeholder='Nombre y Apellido' required/>
                            </div>

                            <div className='form__field'>
                                <label>Mail</label>
                                <input name='mail' value={values.mail} onChange={handleValues} className='input' type='text' placeholder='ejemplo@mail.com' required/>
                            </div>

                            <div className='form__field'>
                                <label>Teléfono</label>
                                <input name='phone' value={values.phone} onChange={handleValues} className='input' type='text' placeholder='2235111111' required/>
                            </div>

                        <div className='buttons-cart'>
                            <button className='button'><Link to='/' className='link'>Volver</Link></button>
                            <button type='submit' className='button'>Finalizar</button>
                        </div>
                            
                        </form>
                    </>

                :

                    <div className='button'>
                        <button><Link to='/' className='link' onClick={emptyCart}>Volver</Link></button>
                    </div>
            }
        </main>

    );
}