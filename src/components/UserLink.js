import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = props => {
  return (
    <Link to={`/user/${props.user.username}`} className='paper-btn user-link'>
      <img className='small-avatar' src={props.user.image} alt='user avatar'></img>
      <span>{props.user.username}</span>
    </Link>
  )
}

export default UserLink