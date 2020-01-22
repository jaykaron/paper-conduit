import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import Profile from './pages/Profile'
import './css/main.css'

function App() {
  return (
    <Router>
      <div className="paper container">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/article/:slug' component={Article} />
          <Route path='/user/:user' component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
