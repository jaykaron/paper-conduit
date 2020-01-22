import React from 'react'

const FavoriteButton = (props) => (
  <button className={props.favorited ? 'btn-primary' : ''}>
    ♥ ({props.count})
  </button>
)

export default FavoriteButton