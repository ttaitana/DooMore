import React, { useRef } from 'react';
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
        <Route path="/handscan" component={HandScan}/>
      </Switch>
    </div>
  );
}

export default App;
