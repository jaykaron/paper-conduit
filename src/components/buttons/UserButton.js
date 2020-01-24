import React from 'react'
import { Link } from 'react-router-dom'
import { DEFAULT_AVATAR } from '../../utils'

const UserButton = props => {
  return (
    <Link to={`/user/${props.user.username}`} className='paper-btn user-link'>
      <img className='small-avatar' alt='user avatar'
        src={props.user.image ? props.user.image : DEFAULT_AVATAR} />
      <span>{props.user.username}</span>
    </Link>
  )
}

export default UserButton