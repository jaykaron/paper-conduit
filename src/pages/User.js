import React, { useEffect, useState, useContext } from 'react'
import ArticleList from '../components/ArticleList'
import { QueryProvider } from '../components/QueryContext'
import { UserContext } from '../components/UserContext'
import FollowButton from '../components/buttons/FollowButton'
import { DEFAULT_AVATAR } from '../utils'
import { Redirect } from 'react-router-dom'

const User = (props) => {
  const user = useContext(UserContext)[0]
  const fetchApi = useContext(UserContext)[2]
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const user = props.match.params.user
    fetchApi(`profiles/${user}`, {}, d => {
      setProfile(d.profile)
    })
  }, [props.match.params.user, fetchApi])

  if (!profile || profile.username === undefined)
    return (
      <div></div>
    )

  if (profile.username === user.username)
    return (
      <Redirect to='/profile' />
    )

  const bio = profile.bio ? profile.bio : `${profile.username} wishes to remain mysterious.`

  const queryParams = {
    author: profile.username,
    limit: 5,
    offset: 0
  }

  return (
    <div>
      <div className="card" style={{ maxWidth: '20rem' }} >
        <img src={profile.image || DEFAULT_AVATAR} className='avatar' alt='User Avatar' />
        <div className="card-body">
          <h4 className="card-title">{profile.username}</h4>
          <h5 className="card-subtitle">{bio}</h5>
          <div className="row flex-center">
            <FollowButton profile={profile} />
          </div>
        </div>
      </div>
      <QueryProvider queryParams={queryParams} >
        <ArticleList />
      </QueryProvider>
    </div>
  )
}

export default User
