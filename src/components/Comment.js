import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Comment = ({ article, comment }) => {
  const userCon = useContext(UserContext)
  const user = userCon[0]
  const fetchApi = userCon[2]

  const deleteComment = () => {
    fetchApi(`articles/${article.slug}/comments/${comment.id}`, {
      method: 'DELETE',
    }, resp => {
      if (resp)
        window.location.reload()
    })
  }

  const deleteButton = (
    <button className='btn-small' style={{ float: 'right' }}
      onClick={deleteComment}>
      Delete
    </button>
  )

  return (
    <div className='padding margin'>
      {comment.author.username === user.username ? deleteButton : null}
      <div>
        {comment.body}
      </div>
      <span className="article-meta">
        Written by <Link to={`/user/${comment.author.username}`}>{comment.author.username} </Link>
        on {new Date(comment.createdAt).toLocaleDateString()}
      </span>
    </div >
  )
}
export default Comment