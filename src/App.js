import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import User from './pages/User'
import './css/main.css'
import Login from './pages/Login'
import { UserProvider } from './components/UserContext'

function App() {
  return (
    <Router>
      <div className="paper container">
        <UserProvider>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/article/:slug' component={Article} />
            <Route path='/user/:user' component={User} />
            <Route path='/signin' exact component={Login} />
            <Route path='/signup' exact component={Login} />
          </Switch>
        </UserProvider>
      </div>
    </Router>
  )
}

export default App
