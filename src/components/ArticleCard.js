import React from 'react'
import { Link } from 'react-router-dom'
import UserLink from './UserLink';

const ArticleCard = props => {


  let tags;
  if (props.tags.length > 0)
    tags = props.tags.reduce((acc, cur) => `${acc} #${cur}`, '')

  return (
    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>{props.title}</h4>
        <h6 className='card-text'>{props.date}</h6>
        <p className='card-text'>{props.description}</p>
        <p className='card-text'><small>{tags}</small></p>
        <div className='article-card-buttons'>
          <Link to={`/article/${props.slug}`} className='paper-btn'>
            Read me!
          </Link>
          <UserLink user={props.author}></UserLink>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard