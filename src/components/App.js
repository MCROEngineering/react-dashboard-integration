import React from 'react';
import '../assets/scss/main.scss';
import DefaultHeader from "./layout/DefaultHeader";
import MainWrapper from './MainWrapper'
import Sidebar from "./layout/hamburger-menu/Sidebar";
import PrivateRoute from './PrivateRoute';
import Dashboard from "./Dashboard";
import Feature from "./Feature";


export default () => {
  return (
    <div>
      <DefaultHeader />
      <Sidebar />
      <MainWrapper>
        <PrivateRoute path='/' exact component={Dashboard}/>
        <PrivateRoute path='/feature' exact component={Feature}/>
      </MainWrapper>
    </div>
  );
}

