import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Signin from './auth/Signin';
import App from './App';
import Signup from './auth/Signup'
import PrivateRoute from './PrivateRoute';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' exact component={Signup}/>
        <PrivateRoute path='/' component={App}/>
      </div>
    );
  }
}

export default RootComponent;
