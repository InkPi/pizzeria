import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from '../Mainpage';
import Menu from '../Menu';
import HawaiianPizza from '../HawaiianPizza';
import GrilledVeggiePizza from '../GrilledVeggiePizza';
import DoubleMushroomPizza from '../DoubleMushroomPizza';
import PepperoniPizza from '../PepperoniPizza';
import CheesePizza from '../CheesePizza';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Mainpage} />
    <Route exact path="/menu" component={Menu} />
    <Route path="/menu/CheesePizza" component={CheesePizza} />
    <Route path="/menu/PepperoniPizza" component={PepperoniPizza} />
    <Route path="/menu/DoubleMushroomPizza" component={DoubleMushroomPizza} />
    <Route path="/menu/HawaiianPizza" component={HawaiianPizza} />
    <Route path="/menu/GrilledVeggiePizza" component={GrilledVeggiePizza} />
  </Switch>
)

export default Main;
