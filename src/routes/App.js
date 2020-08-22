import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Welcome from '../containers/Welcome';
import Home from '../containers/Home';
import Chat from '../containers/Chat';
import Community from '../containers/Community';
import Specialists from '../containers/Specialists';
import Profile from '../containers/Profile';
import OneChat from '../containers/OneChat';
import '../../public/assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/chat' component={Chat} />
    <Route exact path='/community' component={Community} />
    <Route exact path='/specialists' component={Specialists} />
    <Route exact path='/onechat' component={OneChat} />
  </BrowserRouter>
);

export default App;
