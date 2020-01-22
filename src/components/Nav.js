import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (
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
          <li><a href="/signin">Sign in</a></li>
          <li><a href="/signup">Sign up</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav