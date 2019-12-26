import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/about';
import Projects from './components/projects';
import {
    Switch,
  } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <div>
       
        <Switch>
        <Route exact path="/" component = {App} activeClassName="active"/>
                <Route exact path="/about" component = {About} activeClassName="active"/>
                <Route exact path="/projects" component = {Projects} activeClassName="active"/>
        </Switch>
        </div>
    </Router>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
