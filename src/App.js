import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LandPage from './components/LandPage';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
   <div> 
     <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={<LandPage />}/>
        <Route path='/home_page' element={<HomePage />}/>
        <Route path='/about_page' element={<AboutPage />}/>
        <Route path='/shop_page' element={<ShopPage />}/>
      </Routes>
    </BrowserRouter>
   

   </div>
  );
}

export default App;
