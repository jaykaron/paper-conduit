import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../components/UserContext'


const Nav = () => {
  const userCon = useContext(UserContext)
  const user = userCon[0]
  const setUser = userCon[1]

  const loggedOut = (
    <span>
      <li><Link to='/signin'>Sign in</Link></li>
      <li><Link to='/signup'>Sign up</Link></li>
    </span>
  )

  const logout = () => {
    setUser({})
    localStorage.removeItem('token')
  }
  const loggedIn = (
    <span>
      <li><Link to='/profile'>{user.username}</Link></li>
      <li><Link to='/' onClick={logout}>Logout</Link></li>
    </span>
  )

  return (
    <nav className="border split-nav">
      <div className="nav-brand">
        <h4><Link to='/'>Paper Conduit</Link></h4>
      </div>
      <div className="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1"></input>
        <button>
          <label htmlFor="collapsible1">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
        </button>
        <div className="collapsible-body">
          <ul className="inline">
            <li><Link to='/about'>About</Link></li>
            {!user.id ? loggedOut : loggedIn}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav