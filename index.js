import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route as RouterLink} from 'react-router-dom'
import Login from './components/Login/Login';

ReactDOM.render(
  <>  
  <Router>
  {(JSON.parse(window.localStorage.getItem('user')) !== null) ? (<RouterLink exact path="/" component={App}/>)
      :(<RouterLink exact path="/" component={Login}/>)}
    <div id="modale" />
  </Router>
  </>
  ,
  document.getElementById('root')
);
