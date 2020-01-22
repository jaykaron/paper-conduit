import React, { useState, useEffect, createContext } from 'react'
import { fetchApi } from '../utils'

export const QueryContext = createContext()

export const QueryProvider = (props) => {
  const [articles, setArticles] = useState([])
  const [articleCount, setCount] = useState(0)
  const [params, setParams] = useState(setDefaults(props.queryParams))

  useEffect(() => {
    let query = createQuery(params)
    console.log(query)
    fetchApi(`https://conduit.productionready.io/api/articles${query}`, d => {
      setArticles(d.articles)
      setCount(d.articlesCount)
    })
  }, [params])

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
  return p
}

const createQuery = (params) => {
  return '?' + Object.entries(params).map(e => e.join('=')).join('&')
}
