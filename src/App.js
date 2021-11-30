import React from 'react';
import './Colors.css';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { CartView } from './components/CartView/cartView';
import { AboutUs } from './components/AboutUs/aboutUs';
import { ContactView } from './components/ContactView/contactView';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/products/:category' element={<ItemListContainer />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
