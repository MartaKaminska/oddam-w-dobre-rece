import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// components
import Home from './components/homepage/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Form from './components/form/Form.js';
import Footer from './components/Footer';
import TopMenu from './components/navigation/TopMenu';

export default function App() {
  return <HashRouter>
    <TopMenu />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/logout' component={Logout} />
      <Route path='/form' component={Form} />
    </Switch>
  <Footer />
  </HashRouter>;
}