import React, { useState, useContext } from 'react'
import Splash from '../components/Splash'
import { UserContext } from '../components/UserContext'

const Login = props => {
  const [user, setUser, fetchApi] = useContext(UserContext)
  // 0 - logged out, 1 - logged in, 2 - error
  const [authState, setAuthState] = useState(user.id ? 1 : 0)
  const [errorMessages, setErrorMessages] = useState([])

  const signup = props.match.path === '/signup'

  const handleResponse = resp => {
    if (resp.user) {
      setAuthState(1)
      setUser(resp.user)
      localStorage.setItem('token', resp.user.token)
    }
    else if (!resp.ok) {
      const errors = resp.errors
      let messages = Object.keys(errors).map(
        k => `${k}: ${errors[k].join(', ')}`
      )
      setErrorMessages(messages)

      setAuthState(2)
    }
    else {
      console.error(resp)
    }
  }

  const submit = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    const body = {
      "user": {
        "email": email,
        "password": password
      }
    }
    if (signup) {
      body["user"]["username"] = document.getElementById('username').value
    }

    const endpoint = signup ? 'users' : 'users/login'
    fetchApi(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }, handleResponse)

  }

  const error = (
    <div className="alert alert-danger" id='errorMsg'>
      <p>
        {signup ? 'Error registering' : 'Error logging in'}
      </p>
      <ul>
        {errorMessages.map(m => (<li key={m}>{m}</li>))}
      </ul>
    </div>
  )

  const loginForm = (
    <div>
      <form className="form-group">
        <input className="input-block" type="text" placeholder="Email" id="email"
          autoComplete='email' />
        <br />
        <input className="input-block" type="password" placeholder="Password" id="password"
          autoComplete='current-password' />
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  )

  const signupForm = (
    <div>
      <form className="form-group">
        <input className="input-block" type="text" placeholder="Email" id="email"
          autoComplete='email' />
        <br />
        <input className="input-block" type="text" placeholder="Username" id="username"
          autoComplete='username' />
        <br />
        <input className="input-block" type="password" placeholder="Password" id="password"
          autoComplete='new-password' />
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  )

  const success = (
    <div className="alert alert-success">Hi {user.username}! You are logged in.</div>
  )

  const form = signup ? signupForm : loginForm

  const content = (
    <div>
      {authState === 2 ? error : null}
      {authState !== 1 ? form : success}
    </div>
  )

  return (
    <div>
      <Splash title={signup ? 'Sign up' : 'Sign in'}>
        {content}
      </Splash>
    </div>
  )
}
export default Login
