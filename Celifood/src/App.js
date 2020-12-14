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

function App() {
  return (
    <BrowserRouter> 
      <Banner />
      <Header />
      <Switch>
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
        <Route path="/"> 
          <Index />
        </Route> 
      </Switch>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
