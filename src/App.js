import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { CartView } from './components/CartView/CartView';
import { AboutUs } from './components/AboutUs/AboutUs';
import { ContactView } from './components/ContactView/ContactView';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import { CheckoutView } from './components/CheckoutView/CheckoutView';
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer';
import './Colors.css';

function App() {

  return (
    <CartProvider>

      <BrowserRouter>

        <NavBar />
        <Header />
        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/checkout' element={<CheckoutView />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactView />} />

        </Routes>
        <Footer />

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
