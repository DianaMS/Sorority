import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Welcome from '../containers/Welcome';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/home' component={Home} />
  </BrowserRouter>
);

export default App;
