import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Landing from './components/landing'
import Home from './components/home'
import GetName from './components/name'
import Gender from './components/gender'
import BirthDate from './components/date_birth'
import CardShuffer from './components/card_shuffling'
import Intro from './components/intro'
import HandScan from './components/handscan'
import HandWait from './components/handscan_wait'
import Inconstruct from './components/inconstruct'
import Forcast from './components/random_forcast'
import CardFlip from './components/cardflip'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route path="/name" component={GetName}/>
        <Route path="/gender/:name" render={props => <Gender {...props}/>}/>
        <Route path="/birthdate" component={BirthDate}/>
        <Route path="/card" component={CardShuffer}/>
        <Route path="/intro" component={Intro}/>
        <Route path="/handwait" component={HandWait}/>
        <Route path="/handscan" component={HandScan}/>
        <Route path="/inconstruct" component={Inconstruct}/>
        <Route path="/forcast" component={Forcast}/>
        <Route path="/cardflip/:card_id" render={props => <CardFlip {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
