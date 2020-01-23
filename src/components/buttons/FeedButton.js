import React, { useContext } from 'react'
import { QueryContext } from '../QueryContext'
import { UserContext } from '../UserContext'


const FeedButton = () => {
  const user = useContext(UserContext)[0]
  const queryContext = useContext(QueryContext)
  const params = queryContext[0]
  const setParams = queryContext[1]

  const toggleFeed = () => {
    setParams({ feed: !params.feed })
  }

  if (!user.id)
    return null

  return (
    <button onClick={toggleFeed} className={params.feed ? 'btn-primary' : ''}>
      Feed
    </button>
  )
}

export default FeedButton