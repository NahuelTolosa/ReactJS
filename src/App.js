import React from 'react';
import {NavBar} from './components/NavBar/navBar';
import {Footer} from './components/Footer/footer';
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Colors.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path = "/" element = {<Main />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
