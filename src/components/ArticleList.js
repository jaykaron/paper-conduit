import React, {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'
import { fetchApi } from '../utils'


const ArticleList = (props) => {
  const [articles, setArticles] = useState([])
  
  const query = props.query ? props.query : 'limit=10&offset=0'
  useEffect(() => {
    fetchApi(`https://conduit.productionready.io/api/articles?${query}`, d =>{
      setArticles(d.articles)
    })
  }, [query])

  return(
    <div>
      {
        articles.map((a, i) => (
          <ArticleCard title={a.title} author={a.author.username}
            description={a.description} key={i} slug={a.slug}
            date={new Date(a.createdAt).toLocaleDateString()} />
        ))
      }
    </div>
  )
}

export default ArticleList