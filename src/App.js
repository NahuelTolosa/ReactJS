import React from 'react';
import { NavBar } from './components/NavBar/navBar';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';
import { CartView } from './components/CartView/cartView';
import { AboutUs } from './components/AboutUs/aboutUs';
import { ProductsView } from './components/ProductsView/productsView';
import { ContactView } from './components/ContactView/contactView';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Colors.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
