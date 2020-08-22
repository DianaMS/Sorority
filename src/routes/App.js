import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Welcome from '../containers/Welcome';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/home' component={Home} />
  </BrowserRouter>
);

export default App;
