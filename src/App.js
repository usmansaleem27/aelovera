import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LandPage from './components/LandPage';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import Editable from './components/Editable';
import Documentation from './components/Documentation';

function App() {
  return (
   <div> 
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandPage />}/>
        <Route path='/login' element={ <Login /> } />
        <Route path='/documentation' element={ <Documentation /> } />
        <Route path='/editable' element={ <Editable /> } />
        <Route path='/home_page' element={<HomePage />}/>
        <Route path='/about_page' element={<AboutPage />}/>
        <Route path='/shop_page' element={<ShopPage />}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
