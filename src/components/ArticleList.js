import React, {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'

const ArticleList = () => {
  const [articles, setArticles] = useState(null)
  
  useEffect(() => {
    if (!articles) {
      fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0')
        .then(res => res.json())
        .then(data => {
          setArticles(data.articles)
        })
        .catch(console.log)
    }
  })

  if (!articles)
    return (
      <div></div>
    )

  return(
    <div>
      {
        articles.map((a, i) => (
          <ArticleCard title={a.title} author={a.author.username}
            description={a.description} key={i}
            date={new Date(a.createdAt).toLocaleDateString()} />
        ))
      }
    </div>
  )
}

export default ArticleList