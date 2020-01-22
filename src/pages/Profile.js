import React, { useEffect, useState } from 'react'
import { fetchApi } from '../utils'
import ArticleList from '../components/ArticleList'

const Profile = (props) => {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        const user = props.match.params.user
        const url = `https://conduit.productionready.io/api/profiles/${user}`
        fetchApi(url, d => {
            setProfile(d.profile)
        })
    }, [props.match.params.user])

    if (profile.username === undefined)
        return (
            <div></div>
        )

    const bio = profile.bio ? profile.bio : `${profile.username} wishes to remain mysterious.`
    return (
        <div>
            <div id='user' className="card" >
                <img src={profile.image} className='avatar' alt='User Avatar'/>
                <div className="card-body">
                    <h4 className="card-title">{profile.username}</h4>
                    <h5 className="card-subtitle">{bio}</h5>
                </div>
            </div>
            <ArticleList query='author=qqx71848&limit=5&offset=0' />
        </div>
    )
}

export default Profile
