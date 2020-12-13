import logo from './logo.svg';
import './App.css';
// import '../src/css/styles.css'
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
import Index from '../src/Pages/Index';
import Pizza from '../src/Pages/Pizza';

function App() {
  return (
    <BrowserRouter> 
      <Banner />
      <Header />
      <Switch>
      <Route path="/pizza"> 
          <Pizza />
        </Route> 
        {/* <Route path="/about"> 
          <About />
        </Route>
        <Route path="/contact">
          <Contact /> 
        </Route> */}
        <Route path="/"> 
          <Index />
        </Route> 
      </Switch>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
