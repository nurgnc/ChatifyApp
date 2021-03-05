import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Redux
import firebase from "./firebase";
import store from './store/store'
import { Provider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
//Styles
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
//Components
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";


const rrfConfig = {
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}


const Root = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
  </Switch>
)



ReactDOM.render(
  < Provider store={store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Root /> 
        {/* Root'un içinde history elemanının kullanılabilmesi için Router ile sarmalanmış olması gerekir. */}
      </Router>
    </ReactReduxFirebaseProvider>
  </ Provider >,
  document.getElementById('root')
);
