import React, { useState, createContext } from 'react'
import { API } from '../utils'

export const UserContext = createContext()

export const UserProvider = (props) => {

  const [user, setUser] = useState({})

  const fetchApi = async (endpoint, options, callback) => {
    let token = user.token || localStorage.getItem('token');
    if (token) {
      if (!options.headers)
        options.headers = {}
      options.headers['Authorization'] = `Token ${token}`
    }

    const response = await fetch(`${API}/${endpoint}`, options)

    if (!response.ok) {
      console.error(response)
      return
    }

    const data = await response.json()
    callback(data)
  }



  if (!user.id && localStorage.getItem('token').length > 16) {
    fetchApi('user', {}, resp => {
      if (resp.user)
        setUser(resp.user)
    })
  }

  return (
    <UserContext.Provider value={[user, setUser, fetchApi]}>
      {props.children}
    </UserContext.Provider>
  )
}