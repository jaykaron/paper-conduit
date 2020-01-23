import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'


const FollowButton = (props) => {
  const userCon = useContext(UserContext)
  const user = userCon[0]
  const fetchApi = userCon[2]

  const profile = props.profile

  const [following, setFollowing] = useState(profile.following)

  const toggle = () => {
    fetchApi(`profiles/${profile.username}/follow`, {
      method: following ? 'DELETE' : 'POST',
    }, resp => {
      if (resp.profile) {
        setFollowing(resp.profile.following)
      }
    })
  }


  return (
    <button className={following ? 'btn-primary' : ''}
      onClick={toggle} disabled={user.id ? false : true}>
      {following ? 'Following ✔' : 'Follow ?'}
    </button >
  )
}


export default FollowButton