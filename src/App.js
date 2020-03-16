import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Components
import Navigation from './components/Navigation/Navigation'
import Cart from './components/Cart/Cart'
import ProductsList from './components/ProductsList/ProductsList'
import DefaultPage from './components/DefaultPage/DefaultPage'

//Importing Context
import GlobalProvider from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={ProductsList}/>
          <Route path="/cart" exact component={Cart}/>
          <Route component={DefaultPage}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
