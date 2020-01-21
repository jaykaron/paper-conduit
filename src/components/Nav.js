import React from 'react'

const Nav = () => (
  <nav class="border split-nav">
    <div class="nav-brand">
      <h4><a href="#">Paper Conduit</a></h4>
    </div>
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1"></input>
      <button>
        <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
      </button>
      <div class="collapsible-body">
        <ul class="inline">
          <li><a href="#">Home</a></li>
          <li><a href="#">Sign in</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav