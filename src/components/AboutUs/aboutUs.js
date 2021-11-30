import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import './aboutUs.scss';

export const AboutUs = () => {

    console.log(useContext(cartContext));

    return (
        <main className='main'>
            <section>
                <h2 className='title'>Sobre nosotros</h2><p>
                <hr/>
                <span class="bold">E-Commerce</span> tiene como objetivo la comercialización de prendas de vestir masculinas con un estilo urbano y moderno. Ofrecemos ropa cómoda y de muy buena calidad.</p>
                <p>En nuestras tienda virtual encontraras siempre un portafolio de productos y servicios enfocados a la satisfacción del hombre que desea sentirse cómodo y a la moda.</p>
            </section>
        </main>
        
    );
}