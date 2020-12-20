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
import HamburguesaQuinoa from './Pages/HamburguesaQuinoa';
import Empanadas from './Pages/Empanadas';
import GalletasVainilla from './Pages/GalletasVainilla';
import GalletasChips from './Pages/GalletasChips';
import Gnocchi from './Pages/Gnocchi';
import Tiramisu from './Pages/Tiramisu';
import Tortellinis from './Pages/Tortellinis';
import CakePops from './Pages/CakePops';

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
        <Route path="/hamburguesa-quinoa"> 
          <HamburguesaQuinoa />
        </Route> 
        <Route path="/empanadas"> 
          <Empanadas />
        </Route>
        <Route path="/galletas-vainilla"> 
          <GalletasVainilla />
        </Route>
        <Route path="/galletas-chips"> 
          <GalletasChips />
        </Route>
        <Route path="/gnocchis"> 
          <Gnocchi />
        </Route>
        <Route path="/tiramisu"> 
          <Tiramisu />
        </Route>
        <Route path="/tortellinis"> 
          <Tortellinis />
        </Route>
        <Route path="/cake-pops"> 
          <CakePops />
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
