import React, { useContext, useState } from 'react'
import Splash from "../components/Splash"
import { UserContext } from '../components/UserContext'

const Settings = () => {
  const [user, setUser, fetchApi] = useContext(UserContext)
  const [formState, setFormState] = useState(0)
  const [errorMessages, setErrorMessages] = useState([])

  if (!user.id)
    return (
      <div className="alert alert-danger margin-top-large">You must be logged in to see this page.</div>
    )

  const handleResponse = resp => {
    if (resp.user) {
      setUser(resp.user)
      setFormState(1)
    }
    else if (!resp.ok) {
      const errors = resp.errors
      let messages = Object.keys(errors).map(
        k => `${k}: ${errors[k].join(', ')}`
      )
      setErrorMessages(messages)

      setFormState(2)
    }
    else {
      console.error(resp)
    }
  }
  const submit = () => {
    const fields = ['email', 'username', 'password', 'image', 'bio']

    const body = { 'user': {} }
    fields.forEach(f => {
      let val = document.getElementById(f).value
      if (val !== '')
        body['user'][f] = val
    })

    if (Object.entries(body['user']).length === 0)
      return

    fetchApi('user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }, handleResponse)

  }

  const success = (
    <div className="alert alert-success">You have updated your profile!</div>
  )

  const error = (
    <div className="alert alert-danger" id='errorMsg'>
      <p>Error updating profile</p>
      <ul>
        {errorMessages.map(m => (<li key={m}>{m}</li>))}
      </ul>
    </div>
  )

  const form = (
    <div>
      <form className="form-group">
        <input className="input-block" type="text" placeholder={user.email} id="email"
          autoComplete='email' />
        <br />
        <input className="input-block" type="text" placeholder={user.username} id="username"
          autoComplete='username' />
        <br />
        <input className="input-block" type="password" placeholder="New Password" id="password"
          autoComplete='new-password' />
        <br />
        <input className="input-block" type="text" placeholder="Something about me..." id="bio" />
        <br />
        <input className="input-block" type="text" placeholder="Image URL" id="image" />
      </form>
      <button onClick={submit}>Submit</button>
    </div >
  )
  return (
    <Splash title='Settings'>
      {formState === 2 ? error : null}
      {formState !== 1 ? form : success}
    </Splash>
  )
}

export default Settings