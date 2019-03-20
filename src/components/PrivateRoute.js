import {Redirect, Route} from "react-router-dom";
import React, { Component } from "react";

const signInPath = '/signin';
const checkAuth = () => localStorage.getItem('token') === 'token';

export default class PrivateRoute extends Component {
  render() {
    const { component: Component, ...restProps } = this.props;
    const Redirection = () => window.location.pathname !== signInPath ? <Redirect to={{pathname: signInPath}}/> : null;
    const RenderedComponent = () => checkAuth() ? <Component/> : <Redirection />;
    return (
      <Route
        {...restProps}
        render={RenderedComponent}
      />
    );
  }
}
