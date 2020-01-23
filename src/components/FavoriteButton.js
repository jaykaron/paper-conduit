import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'


const FavoriteButton = (props) => {
  const userCon = useContext(UserContext)
  const user = userCon[0]
  const fetchApi = userCon[2]

  const art = props.article

  const [favorite, setFavorite] = useState(art.favorited)
  const [count, setCount] = useState(art.favoritesCount)

  const toggle = (e) => {
    fetchApi(`articles/${art.slug}/favorite`, {
      method: favorite ? 'DELETE' : 'POST',
    }, resp => {
      if (resp.article) {
        setFavorite(resp.article.favorited)
        setCount(resp.article.favoritesCount)
      }
    })
  }


  return (
    <button className={favorite ? 'btn-primary' : ''}
      onClick={toggle} disabled={user.id ? false : true}>
      ♥ ({count})
  </button >
  )
}


export default FavoriteButton