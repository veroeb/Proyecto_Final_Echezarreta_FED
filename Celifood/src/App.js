import logo from './logo.svg';
import './App.css';

import React from "react"; 
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Index from './Pages/Index';
import Pizza from './Pages/Pizza';
import Tarta from './Pages/Tarta';
import Pancake from './Pages/Pancake';
import Recetas from './Pages/Recetas';
import AboutUs from './Pages/AboutUs';
import TortaFrutas from './Pages/TortaFrutas';

function App() {
  return (
    <BrowserRouter> 
      <Banner />
      <Header />
      <Switch>
        <Route path="/about-us"> 
          <AboutUs />
        </Route> 
        <Route path="/recetas"> 
          <Recetas />
        </Route> 
        <Route path="/pizza"> 
          <Pizza />
        </Route> 
        <Route path="/tarta"> 
          <Tarta />
        </Route> 
        <Route path="/pancake"> 
          <Pancake />
        </Route> 
        <Route path="/torta-frutas"> 
          <TortaFrutas />
        </Route> 
        <Route path="/"> 
          <Index />
        </Route> 
      </Switch>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
