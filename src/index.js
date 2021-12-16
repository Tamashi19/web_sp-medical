import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import App from './App';

import Login from './pages/login/Login';
import reportWebVitals from './reportWebVitals';


const routing = (
  
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component = {Login} /> 
        {/* <Route path = "/consultas" component = {Consultas}/> */}
        
      </Switch>
    </div>
  </Router>
  
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);


reportWebVitals();
