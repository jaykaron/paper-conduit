import React, { useContext } from 'react'
import { UserContext } from '../UserContext'


const CommentButton = (props) => {
  const userCon = useContext(UserContext)
  const user = userCon[0]
  const fetchApi = userCon[2]

  const art = props.article

  const postComment = (e) => {

    const body = JSON.stringify({ 'comment': { 'body': document.getElementById('comment-in').value } })
    fetchApi(`articles/${art.slug}/comments`, {
      method: 'POST',
      body: body,
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    }, resp => {
      if (resp.comment)
        window.location.reload()
    })
  }


  return (
    <div className="row flex-edges">
      {user.id ? (<textarea id='comment-in' className="form-group col sm-8" placeholder="My cordial thoughts..."></textarea>) : null}
      <button className='col sm-3'
        onClick={postComment} disabled={user.id ? false : true}>
        Comment
      </button >
    </div>
  )
}

export default CommentButton