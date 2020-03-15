import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


//Importing Components
import Navigation from './'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
    </Router>
  );
}

export default App;
