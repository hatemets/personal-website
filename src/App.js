import React from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = _ => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
