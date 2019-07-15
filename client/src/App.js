import React , { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from './modules/app-bar/AppBar';
import MainContainer from './modules/main-containers/MainContainer'
import HomePage from './modules/home-containers/home-content/HomePage'
import DashBoardContainer from './modules/dashboard-containers/DashBoardContainer'


class App extends Component{
  render(){
   return(
   	<BrowserRouter>
   	<div>
   	  <AppBar />    
   	  <Switch>
        <Route path={'/home'} component={HomePage} />
        <Route path={'/dash'} component={MainContainer} />
        <Route path={'/'} component={DashBoardContainer} />
      </Switch>     
   	</div>
   	</BrowserRouter>
   );
  }
}

export default App;