import React, { Component } from 'react';
import Main from '../../components/Main';
import './App.css';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import DoubleMushroomPizza from '../DoubleMushroomPizza';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={`/`}><h2 className="title">Pizzeria</h2></Link>
          <div className="dropdown">
          <Link to={`/menu`}><h3 className="dropbtn">Menu</h3></Link>
          <div className="dropdown-content">
            <Link to="/menu/CheesePizza">Cheese Pizza</Link>
            <Link to="/menu/PepperoniPizza">Pepperoni Pizza</Link>
            <Link to="/menu/DoubleMushroomPizza">Double-Mushroom Pizza</Link>
            <Link to="/menu/GrilledVeggiePizza">Grilled Veggie Pizza</Link>
            <Link to="/menu/HawaiianPizza">Hawaiian Pizza</Link>
          </div>
          </div>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
