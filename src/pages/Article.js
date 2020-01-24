import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../components/UserContext'
import UserButton from '../components/buttons/UserButton'
import FavoriteButton from '../components/buttons/FavoriteButton'
import CommentCard from '../components/CommentCard'


const Article = (props) => {

  const fetchApi = useContext(UserContext)[2]
  const [article, setArticle] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    const slug = props.match.params.slug
    fetchApi(`articles/${slug}`, {}, d => {
      if (d.article)
        setArticle(d.article)
    })
    fetchApi(`articles/${slug}/comments`, {}, d => {
      if (d.comments)
        setComments(d.comments)
    })
  }, [props.match.params.slug, fetchApi])


  if (article.title === undefined)
    return (
      <div></div>
    )

  const user = article.author.username

  let tags;
  if (article.tagList.length > 0)
    tags = article.tagList.reduce((acc, cur) => `${acc} #${cur}`, '')

  return (
    <article className="article">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-meta">
        Written by <Link to={`/user/${user}`}>{user} </Link>
        on {new Date(article.createdAt).toLocaleDateString()}
      </p>
      <p>{article.body}</p>
      <p className="article-meta"> {tags} </p>
      <div className="article-card-buttons margin-bottom-large">
        <FavoriteButton article={article} />
        <UserButton user={article.author} />
      </div>
      <CommentCard comments={comments} article={article} />
    </article>
  )
}

export default Article
