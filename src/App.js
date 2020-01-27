import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import User from './pages/User'
import './css/main.css'
import Login from './pages/Login'
import { UserProvider } from './components/UserContext'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Editor from './pages/Editor'

function App() {
  return (
    <Router>
      <div className="paper container">
        <UserProvider>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/profile/settings' exact component={Settings} />
            <Route path='/article/:slug' exact component={Article} />
            <Route path='/user/:user' exact component={User} />
            <Route path='/signin' exact component={Login} />
            <Route path='/signup' exact component={Login} />
            <Route path='/editor' exact component={Editor} />
            <Route path='/editor/:slug' exact component={Editor} />
          </Switch>
        </UserProvider>
      </div>
    </Router>
  )
}

export default App
