import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//Styles
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
//Components
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";


const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
)

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);
