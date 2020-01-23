import React from 'react'

const Splash = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.children}
  </div>
)

export default Splash 