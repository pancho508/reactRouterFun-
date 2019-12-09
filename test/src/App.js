import React from 'react';
import './App.css';

import  Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import ItemDetail from './ItemDetail'

import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" exact component={ItemDetail} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
