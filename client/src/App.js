import React , { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from './modules/app-bar/AppBar';
import MainContainer from './modules/main-container/MainContainer'

class App extends Component {

  render(){
   return(
   	<BrowserRouter>
   	<div>
   	  <AppBar />    
   	  <Switch>
        <Route path={'/'} component={MainContainer} />
      </Switch>     
   	</div>
   	</BrowserRouter>
   );
  }
}

export default App;