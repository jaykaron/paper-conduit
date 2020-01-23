import React, { useState, useEffect, createContext, useContext } from 'react'
import { UserContext } from './UserContext'

export const QueryContext = createContext()

export const QueryProvider = (props) => {
  const fetchApi = useContext(UserContext)[2]

  const [articles, setArticles] = useState([])
  const [articleCount, setCount] = useState(0)
  const [params, setParams] = useState(setDefaults(props.queryParams))

  useEffect(() => {
    let query = createQuery(setDefaults(params))
    fetchApi(`articles${query}`, {}, d => {
      setArticles(d.articles)
      setCount(d.articlesCount)
    })
  }, [params, fetchApi])

  return (
    <QueryContext.Provider value={[params, setParams, articles, articleCount]}>
      {props.children}
    </QueryContext.Provider>
  )
}

const setDefaults = param => {
  const p = param ? param : {}
  p.offset = p.offset ? p.offset : 0
  p.limit = p.limit ? p.limit : 10
  p.author = p.author ? p.author : ''
  p.tag = p.tag ? p.tag : ''
  p.favorited = p.favorited ? p.favorited : ''
  p.feed = p.feed ? true : false
  return p
}

const createQuery = (params) => {
  const filter = '?' + Object.entries(params).map(e => e.join('=')).join('&')

  if (params.feed)
    return `/feed${filter}`

  return filter
}
