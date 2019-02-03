import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'; // Router - маршрутизатор; Route - сопост URL с опред.компонентом

import App from './App';
import About from './pages/About';
import Books from './pages/Books';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />                 // либо загрузить компонент IndexRoute
      <Route path="about" component={About}/>
      <Route path="books" component={Books}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
   document.getElementById('root'));
