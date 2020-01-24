import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserButton from './buttons/UserButton'
import FavoriteButton from './buttons/FavoriteButton'
import { UserContext } from './UserContext'

const ArticleCard = props => {
  const art = props.article
  const user = useContext(UserContext)[0]

  let tagsText
  if (art.tagList.length > 0)
    tagsText = art.tagList.reduce((acc, cur) => `${acc} #${cur}`, '')

  const editButton = (
    <Link to={`/editor/${art.slug}`} className='paper-btn' style={{ float: 'right' }}>
      ✎ Edit
    </Link >
  )

  return (
    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>{art.title}</h4>
        <h6 className='card-text'>{new Date(art.createdAt).toLocaleDateString()}</h6>
        <p className='card-text'>{art.description}</p>
        <p className='card-text'><small>{tagsText}</small></p>
        <div className='row flex-spaces'>
          <Link to={`/article/${art.slug}`} className='paper-btn'>
            Read me!
          </Link>
          <FavoriteButton article={art} />
          <UserButton user={art.author}></UserButton>
          {user.username === art.author.username ? editButton : null}
        </div>
      </div>
    </div>
  )
}

export default ArticleCard