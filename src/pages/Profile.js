import React, { useContext } from 'react'
import ArticleList from '../components/ArticleList'
import { QueryProvider } from '../components/QueryContext'
import { UserContext } from '../components/UserContext'
import { DEFAULT_AVATAR } from '../utils'
import Splash from '../components/Splash'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = useContext(UserContext)[0]

  if (!user.id)
    return (
      <div className="alert alert-danger margin-top-large">You must be logged in to see this page.</div>
    )

  const bio = user.bio ? user.bio : `${user.username} wishes to remain mysterious.`

  const queryParams = {
    author: user.username,
    limit: 5,
    offset: 0
  }

  return (
    <div>
      <div className="card" style={{ maxWidth: '20rem' }} >
        <img src={user.image || DEFAULT_AVATAR} className='avatar' alt='User Avatar' />
        <div className="card-body">
          <h4 className="card-title">{user.username}</h4>
          <h5 className="card-subtitle">{bio}</h5>
          <div className='row flex-edges margin-top'>
            <Link to='/editor' className='paper-btn'>
              Create Article
            </Link>
            <Link to='/profile/settings' className='paper-btn'>
              ⚙ Settings
            </Link>
          </div>
        </div>
      </div>
      <Splash title='My Articles'>
        <QueryProvider queryParams={queryParams} >
          <ArticleList />
        </QueryProvider>
      </Splash>
    </div>
  )
}

export default Profile
