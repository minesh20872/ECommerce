import React, { Component } from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';

const HatsPage =()=> (
  <div>
    <h1> Hats Page</h1>
  </div>
)
function App(){
  return <div>
    <Switch>

     <Route exact path='/' component={HomePage}></Route>
     <Route  path='/hats' component={HatsPage}></Route>
 
   </Switch>
  </div>
}
export default App;