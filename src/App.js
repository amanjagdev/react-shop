import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

//Importing Components
import Navigation from './components/Navigation/Navigation'
import Cart from './components/Cart/Cart'
import ProductsList from './components/ProductsList/ProductsList'
import DefaultPage from './components/DefaultPage/DefaultPage'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/cart" exact component={Cart} />
          <Route component={DefaultPage} />
        </Switch>
    </Router>
  );
}

export default App;
