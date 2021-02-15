import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Language from './Language'
import Skills from './Skills'

export default function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Language" component={Language}/>
          <Route exact path="/Skills" component={Skills}/>
        </Switch>

      </Router>
        
    
    )
  }

