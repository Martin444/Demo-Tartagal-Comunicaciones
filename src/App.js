import React from 'react';
import './App.css';
import Login from './Pages/Login'
import Home from './Pages/Home'

import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
