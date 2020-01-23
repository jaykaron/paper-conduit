import React, { useState, useContext } from 'react'
import Splash from '../components/Splash'
import { UserContext } from '../components/UserContext'

const Login = () => {
  const [user, setUser, fetchApi] = useContext(UserContext)
  const [authState, setAuthState] = useState(user.id ? 1 : 0)

  const handleResponse = resp => {
    if (resp.user) {
      setAuthState(1)
      setUser(resp.user)
      localStorage.setItem('token', resp.user.token)
    }
    else if (resp.errors) {
      setAuthState(2)
    }
    else {
      console.error(resp)
    }
  }

  const submit = (e) => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    fetchApi(`users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": {
          "email": email,
          "password": password
        }
      })
    }, handleResponse)

  }

  const incorrectLogin = (
    <div className="alert alert-danger">Incorrect email or password</div>
  )

  const form = (
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

  const success = (
    <div className="alert alert-success">Hi {user.username}! You are logged in.</div>
  )

  const content = (
    <div>
      {authState === 2 ? incorrectLogin : null}
      {authState !== 1 ? form : success}
    </div>
  )

  return (
    <div>
      <Splash title='Login'>
        {content}
      </Splash>
    </div>
  )
}
export default Login
